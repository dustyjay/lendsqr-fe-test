import BaseCard from '../../components/base-card';
import AllUsersIcon from '../../assets/user-icons/all-users.svg';
import ActiveUsersIcon from '../../assets/user-icons/active-users.svg';
import UsersWithLoansIcon from '../../assets/user-icons/users-with-loans.svg';
import UsersWithSavingsIcon from '../../assets/user-icons/users-with-savings.svg';

import './index.scss';
import Table from '../../components/table';
import { tableHeaders } from './dummy-data';
import { useEffect, useState } from 'react';
import useTableSort from '../../components/table/useTableSort';
import UserListItem from './user-list-item';
import type { UserType } from '../../models/user.model';
import UserListMobile from './user-list-mobile';
import SortPopover from './sort-popover';
import { Paginate, type PageSize } from '../../components/paginate';

const UsersListPage = () => {
  const [activeSort, setActiveSort] = useState<keyof UserType>('organization');
  const [allUsers, setAllUsers] = useState<UserType[]>([]);
  const [pagination, setPagination] = useState<{
    pageSize: PageSize;
    totalCount: number;
    pageNumber: number;
  }>({
    pageSize: 20,
    totalCount: 102,
    pageNumber: 1
  });

  const { sortedList } = useTableSort(allUsers, activeSort);

  const fetchListOfUsers = async () => {
    try {
      const fetchRes = await fetch('https://mocki.io/v1/c6aca6f4-ea0a-47ed-ab9d-09ea624749a3');
      const res: UserType[] = await fetchRes.json();

      setAllUsers(res);
    } catch (error) {
      // TODO :: handle error messages shown to user
      console.error('An error occurred fetching list of users');
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

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
      <Paginate
        {...pagination}
        initialPage={1}
        onPageChange={(e) => setPagination({ ...pagination, pageNumber: e.selected })}
        onPageSizeChange={(e) => setPagination({ ...pagination, pageSize: e })}
      />
    </section>
  );
};

export default UsersListPage;
