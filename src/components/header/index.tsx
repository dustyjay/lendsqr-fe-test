import { Link, useNavigate } from 'react-router-dom';
import NotificationIcon from '../../assets/notifications.svg';
import CaretDownIcon from '../../assets/caret-down.svg';
import Dropdown, { type DropdownItemType } from '../dropdown';
import './index.scss';
import Searchbar from '../searchbar';
import { ROUTE_KEYS } from '../../util';
import MobileHeader from './mobile-header';

const USER_AVATAR =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKu1w7TulWMUKGszjJlb7PDtn0LVSJgGnrog&s';

const Header = () => {
  const navigate = useNavigate();

  const USER_MENU: DropdownItemType[] = [
    {
      label: 'Logout',
      onClick: () => {
        localStorage.clear();
        navigate(ROUTE_KEYS.LOGIN);
      }
    }
  ];
  return (
    <header className='header'>
      <div className='header-logo'>
        <img src='/lendsqr.svg' alt='Lendsqr' />
      </div>
      <div className='header-main'>
        <div className='header-searchbar'>
          <Searchbar />
        </div>
        <ul className='header-user'>
          <li>
            <Link to=''>Docs</Link>
          </li>
          <li>
            <img src={NotificationIcon} alt='Notifications' />
          </li>
          <li className='user-menu'>
            <div className='user-menu__image'>
              <img src={USER_AVATAR} alt='User name' />
            </div>
            <Dropdown menuItems={USER_MENU}>
              <span className='user-menu__dropdown'>
                <span>Adedeji</span>
                <img src={CaretDownIcon} alt='User menu' />
              </span>
            </Dropdown>
          </li>
        </ul>
      </div>
      <MobileHeader/>
    </header>
  );
};

export default Header;
