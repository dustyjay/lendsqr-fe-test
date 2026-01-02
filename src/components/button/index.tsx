import type { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import './index.scss'

type Props = PropsWithChildren &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: 'primary' | 'secondary' | 'danger';
    variant?: 'outline' | 'solid';
    size?: 'regular' | 'large';
  };

const Button: FC<Props> = ({
  color = 'primary',
  variant = 'solid',
  size = 'regular',
  children,
  className = '',
  ...buttonProps
}) => {
  return (
    <button {...buttonProps} className={`btn btn-${color} btn-${variant} btn-${size} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
