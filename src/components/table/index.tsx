import { type ReactNode } from 'react';
import SortIcon from '../../assets/sort.svg';
import './index.scss';
import type { TableHeaderType } from './types';

type TableProps<T extends string> = {
  headers: TableHeaderType<T>[];
  activeSort: T;
  onSortChange?: (sort: T) => void;
  children: ReactNode[];
};

const Table = <T extends string>({
  headers,
  activeSort,
  onSortChange,
  children
}: TableProps<T>) => {
  return (
    <table className={`table`}>
      <thead className='table__head'>
        <tr className='table__head--row'>
          {headers.map((h, i) => (
            <th key={i} className='table__head--text' style={h.style}>
              <span>{h.label}</span>
              <button
                onClick={() => onSortChange?.(h.key)}
                className={`table__head--sort ${h.key === activeSort ? 'is-active' : ''}`}>
                <img src={SortIcon} alt='Sort header' />
              </button>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children.map((b) => b)}</tbody>
    </table>
  );
};

export default Table;
