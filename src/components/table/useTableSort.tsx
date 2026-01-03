import { useMemo } from 'react';
import type { TableDataType } from './types';

function useTableSort<T extends string>(tableData: TableDataType<T>[], activeSort: T) {
  const sortedList = useMemo(() => {
    return tableData.sort((a, b) => a[activeSort].localeCompare(b[activeSort]));
  }, [activeSort, tableData]);

  return { sortedList };
}

export default useTableSort;
