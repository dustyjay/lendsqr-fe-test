import type { FC } from 'react';
import type { USER_TABLE_STATUS, UserType } from '../../models/user.model';
import StatusTag from '../../components/status-tag';
import Dropdown from '../../components/dropdown';
import { Link, useNavigate } from 'react-router-dom';
import MoreIcon from '../../assets/more.svg';

type Props = {
  users: UserType[];
};

const UserListMobile: FC<Props> = ({ users }) => {
  const navigate = useNavigate();

  const getDropdownMenu = (user: UserType) => {
    return [
      {
        label: 'View Details',
        onClick: () => {
          navigate(`/users/${user.id}`);
        }
      },
      {
        label: 'Blacklist User',
        onClick: () => {
          console.log('Blacklist User', user.organization);
        }
      },
      {
        label: 'Activate User',
        onClick: () => {
          console.log('Activate User', user.organization);
        }
      }
    ];
  };

  return (
    <ul className='user-mobile'>
      {users.map((user) => (
        <li key={user.id} className='user-mobile__item'>
          <div>
            <div className='user-mobile__item--top'>
              <Link className='user-mobile__name' to={`/users/${user.id}`}>
                <p className='user-mobile__org'>{user.organization}</p>
                <p>{user.username}</p>
              </Link>
              <div className='user-table__status'>
                <StatusTag status={user.status as USER_TABLE_STATUS} />

                <Dropdown menuItems={getDropdownMenu(user)}>
                  <span className='user-menu__dropdown'>
                    <img src={MoreIcon} alt='User menu options' />
                  </span>
                </Dropdown>
              </div>
            </div>
            <p>{user.email}</p>
            <p>{user.phoneNumber}</p>
            <p className='user-mobile__created-at'>Date joined: {user.createdAt}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserListMobile;
