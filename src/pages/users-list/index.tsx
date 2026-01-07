import BaseCard from '../../components/base-card';
import AllUsersIcon from '../../assets/user-icons/all-users.svg';
import ActiveUsersIcon from '../../assets/user-icons/active-users.svg';
import UsersWithLoansIcon from '../../assets/user-icons/users-with-loans.svg';
import UsersWithSavingsIcon from '../../assets/user-icons/users-with-savings.svg';

import './index.scss';
import Table from '../../components/table';
import { tableHeaders } from './util';
import { useEffect, useMemo, useState } from 'react';
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
    forcePage: number;
  }>({
    pageSize: 20,
    totalCount: 0,
    forcePage: 0
  });
  const [loading, setLoading] = useState(false);

  const { sortedList } = useTableSort(allUsers, activeSort);

  const paginatedUsers = useMemo(() => {
    const { forcePage, pageSize } = pagination;
    const offset = pageSize * forcePage;

    return sortedList.slice(offset, pageSize + offset);
  }, [pagination, sortedList, activeSort]);

  const counters = useMemo(() => {
    const usersCount = allUsers.length;
    const activeUsersCount = allUsers.filter((u) => u.status === 'Active').length;
    const usersWithLoans = allUsers.filter((u) => u.loan.repayment > 0).length;
    const usersWithSavings = allUsers.filter((u) => u.balance > 0).length;

    return {
      usersCount,
      activeUsersCount,
      usersWithLoans,
      usersWithSavings
    };
  }, [allUsers]);

  const fetchListOfUsers = async () => {
    try {
      setLoading(true);
      const fetchRes = await fetch('https://mocki.io/v1/f5b1ba6f-a36a-42aa-94e8-779ffd334491');
      const res: UserType[] = await fetchRes.json();

      setAllUsers(res);
      setPagination({ ...pagination, totalCount: res.length });
    } catch (error) {
      // TODO :: handle error messages shown to user
      console.error('An error occurred fetching list of users');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) {
    return <div className='page-loading'>Loading data...</div>;
  }

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
            <span className='stats-count'>{counters.usersCount.toLocaleString('en-NG')}</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={ActiveUsersIcon} alt='Active Users' />
            </span>
            <span className='stats-title'>ACTIVE USERS</span>
            <span className='stats-count'>{counters.activeUsersCount.toLocaleString('en-NG')}</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={UsersWithLoansIcon} alt='Users with loans' />
            </span>
            <span className='stats-title'>USERS WITH LOANS</span>
            <span className='stats-count'>{counters.usersWithLoans.toLocaleString('en-NG')}</span>
          </div>
        </BaseCard>
        <BaseCard>
          <div className='stats-card'>
            <span className='stats-image'>
              <img src={UsersWithSavingsIcon} alt='Users with savings' />
            </span>
            <span className='stats-title'>USERS WITH SAVINGS</span>
            <span className='stats-count'>{counters.usersWithSavings.toLocaleString('en-NG')}</span>
          </div>
        </BaseCard>
      </div>
      <BaseCard className='user-table'>
        <Table activeSort={activeSort} onSortChange={setActiveSort} headers={tableHeaders}>
          {paginatedUsers.map((td, i) => (
            <UserListItem data={td} key={i} />
          ))}
        </Table>
      </BaseCard>
      <div className='user-mobile__wrapper'>
        <SortPopover sortKey={activeSort} onSelect={setActiveSort} />
        <UserListMobile users={paginatedUsers} />
      </div>
      <Paginate
        {...pagination}
        initialPage={0}
        onPageChange={(e) => setPagination({ ...pagination, forcePage: e.selected })}
        onPageSizeChange={(e) => setPagination({ ...pagination, pageSize: e, forcePage: 0 })}
      />
    </section>
  );
};

export default UsersListPage;
