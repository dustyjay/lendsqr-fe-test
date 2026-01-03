import type { TableHeaderType, TableDataType } from '../../components/table/types';

export type USER_TABLE_KEY =
  | 'organization'
  | 'username'
  | 'email'
  | 'phoneNumber'
  | 'dateJoined'
  | 'status';

export type USER_TABLE_STATUS = 'Inactive' | 'Pending' | 'Blacklisted' | 'Active';

export const tableData: TableDataType<USER_TABLE_KEY>[] = [
  {
    organization: 'Irorun',
    username: 'Jane Doe',
    email: 'yrust@yourown.risk',
    phoneNumber: '090375827482',
    dateJoined: 'May 15, 2018 10:00 AM',
    status: 'Inactive'
  },
  {
    organization: 'Adeolu Inc',
    username: 'Jane Doe',
    email: 'wrust@yourown.risk',
    phoneNumber: '090375827482',
    dateJoined: 'May 15, 2018 10:00 AM',
    status: 'Active'
  },
  {
    organization: 'Blessed Inc',
    username: 'Ariah Doe',
    email: 'prust@yourown.risk',
    phoneNumber: '090375827482',
    dateJoined: 'May 15, 2018 10:00 AM',
    status: 'Active'
  },
  {
    organization: 'Jesuis',
    username: 'Jane Doe',
    email: 'arust@yourown.risk',
    phoneNumber: '090375827482',
    dateJoined: 'May 15, 2018 10:00 AM',
    status: 'Blacklisted'
  },
  {
    organization: 'Irorun',
    username: 'Jane Doe',
    email: 'abust@yourown.risk',
    phoneNumber: '090375827482',
    dateJoined: 'May 15, 2018 10:00 AM',
    status: 'Pending'
  }
];

export const tableHeaders: TableHeaderType<USER_TABLE_KEY>[] = [
  {
    label: 'Organization',
    key: 'organization',
    canSort: true
  },
  {
    label: 'Username',
    key: 'username',
    canSort: true
  },
  {
    label: 'Email',
    key: 'email',
    canSort: true
  },
  {
    label: 'Phone Number',
    key: 'phoneNumber',
    canSort: true
  },
  {
    label: 'Date Joined',
    key: 'dateJoined',
    canSort: true
  },
  {
    label: 'Status',
    key: 'status',
    canSort: true
  }
];
