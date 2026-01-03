import {
  useState,
  useRef,
  useEffect,
  type FC,
  type PropsWithChildren,
  type ReactNode
} from 'react';
import './index.scss';

type Props = PropsWithChildren & {
  items: DropdownItemType[];
};

export type DropdownItemType = {
  label: string;
  onClick: () => void;
  isDisabled?: boolean;
  className?: string;
  icon?: ReactNode;
};

const Dropdown: FC<Props> = ({ children, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // Ref to detect clicks outside the menu

  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='dropdown-container' ref={dropdownRef}>
      <button className='dropdown-button' onClick={toggleDropdown}>
        {children}
      </button>
      {isOpen && items.length > 0 && (
        <ul className='dropdown-menu'>
          {items.map((item) => (
            <li>
              <button
                onClick={item.onClick}
                className={`dropdown-item ${item.className || ''}`}
                disabled={item.isDisabled}>
                {item.icon && <span>{item.icon}</span>}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
