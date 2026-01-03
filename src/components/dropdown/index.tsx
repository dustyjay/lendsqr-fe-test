import { useState, useRef, useEffect, type PropsWithChildren, type ReactNode } from 'react';
import './index.scss';
import DropdownItem from './dropdown-item';

export type DropdownItemType = {
  label: string;
  onClick?: () => void;
  isDisabled?: boolean;
  className?: string;
  icon?: ReactNode;
};

type Props = PropsWithChildren & {
  menuItems: DropdownItemType[];
};

const Dropdown = ({ children, menuItems }: Props) => {
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
      {isOpen && menuItems.length > 0 && (
        <ul className='dropdown-menu'>
          {menuItems.map((menu) => (
            <DropdownItem
              {...menu}
              onClick={() => {
                setIsOpen(false)
                menu.onClick?.();
              }}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
