import { renderHook } from '@testing-library/react';
import useTableSort from '../useTableSort';

describe('useTableSort', () => {
  type Row = { id: number; name: string; age: number | string | null };

  const base: Row[] = [
    { id: 2, name: 'Zoe', age: 30 },
    { id: 1, name: 'Adam', age: 25 },
    { id: 3, name: 'Mark', age: 18 },
    { id: 4, name: 'Bella', age: null }
  ];

  it('sorts by a string key ascending using localeCompare', () => {
    const { result, rerender } = renderHook(({ data, sort }) => useTableSort<Row>(data, sort), {
      initialProps: { data: base, sort: 'name' as keyof Row }
    });

    expect(result.current.sortedList.map((r) => r.name)).toEqual(['Adam', 'Bella', 'Mark', 'Zoe']);

    // change sort key should resort
    rerender({ data: base, sort: 'id' });
    expect(result.current.sortedList.map((r) => r.id)).toEqual([1, 2, 3, 4]);
  });

  it('coerces values to string before comparing (numbers vs strings)', () => {
    const data: Row[] = [
      { id: 1, name: 'a', age: 2 },
      { id: 2, name: 'b', age: '10' },
      { id: 3, name: 'c', age: 1 }
    ];
    const { result } = renderHook(() => useTableSort<Row>(data, 'age'));

    expect(result.current.sortedList.map((r) => r.age)).toEqual([1, '10', 2]);
  });

  it('handles null/undefined by stringifying to "null"/"undefined"', () => {
    const data: Row[] = [
      { id: 1, name: 'a', age: null },
      { id: 2, name: 'b', age: 0 },
      { id: 3, name: 'c', age: undefined as unknown as number }
    ];
    const { result } = renderHook(() => useTableSort<Row>(data, 'age'));
    expect(result.current.sortedList.map((r) => String(r.age))).toEqual(['0', 'null', 'undefined']);
  });

  it('returns a new sorted reference when input array reference changes', () => {
    const { result, rerender } = renderHook(({ data }) => useTableSort<Row>(data, 'name'), {
      initialProps: { data: base }
    });
    const firstSorted = result.current.sortedList;

    const newData = [...base, { id: 5, name: 'AAA', age: 40 }];
    rerender({ data: newData });

    expect(result.current.sortedList).not.toBe(firstSorted);
    expect(result.current.sortedList[0].name).toBe('AAA');
  });

  it('mutates the original array passed in due to in-place sort (document current behavior)', () => {
    const data = [...base];
    const copyRef = data;
    const { result } = renderHook(() => useTableSort<Row>(data, 'id'));
    expect(copyRef).toBe(data);
    // useTableSort uses Array.sort directly, which mutates the array reference
    expect(copyRef[0].id).toBe(1);
    expect(result.current.sortedList[0].id).toBe(1);
  });
});
