import type { TableHeaderType } from '../../components/table/types';
import type {  UserType } from '../../models/user.model';
import { userDetails } from '../user-details/dummy-data';

export const tableData: UserType[] = [
  {
    ...userDetails,
    id: 'LSQFf587g90'
  },
  {
    ...userDetails,
    id: 'W429jc01l',
    organization: 'Adeolu Inc',
    username: 'Jane Doe',
    email: 'wrust@yourown.risk',
    phoneNumber: '090375827482',
    status: 'Active'
  },
  {
    ...userDetails,
    id: 'Uewf4452jod',
    organization: 'Blessed Inc',
    username: 'Ariah Doe',
    email: 'prust@yourown.risk',
    phoneNumber: '090375827482',
    status: 'Active'
  },
  {
    ...userDetails,
    id: 'Pjw83njio1',
    organization: 'Jesuis',
    username: 'Jane Doe',
    email: 'arust@yourown.risk',
    phoneNumber: '090375827482',
    status: 'Blacklisted'
  },
  {
    ...userDetails,
    id: 'P221kJjio1',
    organization: 'Irorun',
    username: 'Jane Doe',
    email: 'abust@yourown.risk',
    phoneNumber: '090375827482',
    status: 'Pending'
  }
];

export const tableHeaders: TableHeaderType<keyof UserType>[] = [
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
    key: 'createdAt',
    canSort: true
  },
  {
    label: 'Status',
    key: 'status',
    canSort: true
  }
];
