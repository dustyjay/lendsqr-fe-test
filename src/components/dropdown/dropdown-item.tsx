import type { DropdownItemType } from '.';
import './index.scss'

type Props = DropdownItemType & {};

const DropdownItem = ({ className, label, icon, isDisabled, active, onClick }: Props) => {
  return (
    <li>
      <button
        onClick={onClick}
        className={`dropdown-item ${active ? 'is-active': ''} ${className || ''}`}
        disabled={isDisabled}>
        {icon && <span>{icon}</span>}
        {label}
      </button>
    </li>
  );
};

export default DropdownItem;
