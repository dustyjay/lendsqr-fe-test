import type { FC, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss'

type HMenuItem = {
  link: string;
  label: ReactNode;
};

type Props = {
  list: HMenuItem[];
};

const HorizontalMenu: FC<Props> = ({ list }) => {
  return (
    <nav className='h-menu__nav'>
      <ul className='h-menu__list'>
        {list.map((item) => (
          <li className='h-menu__item' key={item.link}>
            <NavLink
              className={({ isActive }) => `h-menu__link ${isActive ? 'is-active' : ''}`}
              to={item.link}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HorizontalMenu;
