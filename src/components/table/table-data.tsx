import { type ReactNode } from 'react';

type TableDataProps = {
  children: ReactNode;
  className?: string;
};

const TableData = ({ children, className = '' }: TableDataProps) => {
  return <td className={`table__data_cell ${className}`}>{children}</td>;
};

export default TableData;
