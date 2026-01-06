import type { TableHeaderType } from '../../components/table/types';
import type { UserType } from '../../models/user.model';

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
