import type { FC } from 'react';
import TableData from '../../components/table/table-data';
import TableRow from '../../components/table/table-row';
import StatusTag from '../../components/status-tag';
import Dropdown, { type DropdownItemType } from '../../components/dropdown';
import MoreIcon from '../../assets/more.svg';
import './index.scss'
import type { USER_TABLE_STATUS, UserType } from '../../models/user.model';
import { useNavigate } from 'react-router-dom';

type Props = {
  data: UserType
};

const UserListItem: FC<Props> = ({ data }) => {
  const navigate = useNavigate()

  const DROPDOWN_MENU: DropdownItemType[] = [
    {
      label: 'View Details',
      onClick: () => {
        navigate(`/users/${data.id}`)
      }
    },
    {
      label: 'Blacklist User',
      onClick: () => {
        console.log('Blacklist User', data.organization);
      }
    },
    {
      label: 'Activate User',
      onClick: () => {
        console.log('Activate User', data.organization);
      }
    }
  ];

  return (
    <TableRow>
      <TableData>{data.organization}</TableData>
      <TableData>{data.username}</TableData>
      <TableData>{data.email}</TableData>
      <TableData>{data.phoneNumber}</TableData>
      <TableData>{data.createdAt}</TableData>
      <TableData>
        <div className='user-table__status'>
          <StatusTag status={data.status as USER_TABLE_STATUS} />

          <Dropdown menuItems={DROPDOWN_MENU}>
            <span className='user-menu__dropdown'>
              <img src={MoreIcon} alt='User menu options' />
            </span>
          </Dropdown>
        </div>
      </TableData>
    </TableRow>
  );
};


export default UserListItem
