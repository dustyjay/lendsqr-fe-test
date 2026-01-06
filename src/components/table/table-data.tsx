import { type PropsWithChildren } from 'react';

type TableDataProps = PropsWithChildren & {
  className?: string;
};

const TableData = ({ children, className = '' }: TableDataProps) => {
  return <td className={`table__data_cell ${className}`}>{children}</td>;
};

export default TableData;
