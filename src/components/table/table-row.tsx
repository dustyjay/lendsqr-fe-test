import { type ReactNode } from 'react';

type TableRowProps = {
  children: ReactNode;
  className?: string;
};

const TableRow = ({ children, className = '' }: TableRowProps)=> {
  return <tr className={`table__row ${className}`}>{children}</tr>;
}

export default TableRow
