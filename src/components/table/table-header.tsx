import { type ReactNode } from 'react';

type TableHeaderProps = {
  children: ReactNode;
  className?: string;
};

const TableHeader = ({ children, className = '' }: TableHeaderProps) => {
  return <th className={`table__header ${className}`}>{children}</th>;
};

export default TableHeader;
