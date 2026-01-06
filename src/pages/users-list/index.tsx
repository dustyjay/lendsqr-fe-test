import BaseCard from '../../components/base-card';
import AllUsersIcon from '../../assets/user-icons/all-users.svg';
import ActiveUsersIcon from '../../assets/user-icons/active-users.svg';
import UsersWithLoansIcon from '../../assets/user-icons/users-with-loans.svg';
import UsersWithSavingsIcon from '../../assets/user-icons/users-with-savings.svg';

import './index.scss';
import Table from '../../components/table';
import { tableData, tableHeaders } from './dummy-data';
import { useState } from 'react';
import useTableSort from '../../components/table/useTableSort';
import UserListItem from './user-list-item';
import type { UserType } from '../../models/user.model';
import UserListMobile from './user-list-mobile';
import SortPopover from './sort-popover';

const UsersListPage = () => {
  const [activeSort, setActiveSort] = useState<keyof UserType>('organization');

  const { sortedList } = useTableSort(tableData, activeSort);

  return (
    <section>
      <div className='page-header'>
        <h1 className='page-title'>Users</h1>
      </div>
      <div className='stats-list'>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={AllUsersIcon} alt='All Users' />
            </span>
            <span className='stats-title'>USERS</span>
            <span className='stats-count'>2,453</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={ActiveUsersIcon} alt='Active Users' />
            </span>
            <span className='stats-title'>ACTIVE USERS</span>
            <span className='stats-count'>2,453</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={UsersWithLoansIcon} alt='Users with loans' />
            </span>
            <span className='stats-title'>USERS WITH LOANS</span>
            <span className='stats-count'>12,453</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={UsersWithSavingsIcon} alt='Users with savings' />
            </span>
            <span className='stats-title'>USERS WITH SAVINGS</span>
            <span className='stats-count'>102,453</span>
          </div>
        </BaseCard>
      </div>
      <BaseCard className='user-table'>
        <Table activeSort={activeSort} onSortChange={setActiveSort} headers={tableHeaders}>
          {sortedList.map((td, i) => (
            <UserListItem data={td} key={i} />
          ))}
        </Table>
      </BaseCard>
      <div className='user-mobile__wrapper'>
        <SortPopover sortKey={activeSort} onSelect={setActiveSort} />
        <UserListMobile users={sortedList} />
      </div>
    </section>
  );
};

export default UsersListPage;
