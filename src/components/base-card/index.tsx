import type { FC, PropsWithChildren } from 'react';
import './index.scss'

type Props = PropsWithChildren & {
  className?: string;
};

const BaseCard: FC<Props> = ({ children, className = '' }) => {
  return <div className={`base-card ${className}`}>{children}</div>;
};

export default BaseCard
