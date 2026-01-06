import { useMemo } from 'react';

function useTableSort<T extends object>(tableData: T[], activeSort: keyof T) {
  const sortedList = useMemo(() => {
    return tableData.sort((a, b) => String(a[activeSort]).localeCompare(String(b[activeSort])));
  }, [activeSort, tableData]);

  return { sortedList };
}

export default useTableSort;
