import Dropdown from '../../components/dropdown';
import SortIcon from '../../assets/sort.svg';
import type { UserType } from '../../models/user.model';
import { useMemo, type FC } from 'react';

type Props = {
  sortKey: keyof UserType;
  onSelect: (key: keyof UserType) => void;
};

const SortPopover: FC<Props> = ({ sortKey, onSelect }) => {
  const objFields = (key: keyof UserType) => {
    return {
      key,
      onClick: () => onSelect(key),
      active: key === sortKey
    };
  };
  const sortColumns = [
    {
      label: 'Organization',
      ...objFields('organization')
    },
    {
      label: 'Username',
      ...objFields('username')
    },
    {
      label: 'Email',
      ...objFields('email')
    },
    {
      label: 'Phone number',
      ...objFields('phoneNumber')
    },
    {
      label: 'Date joined',
      ...objFields('createdAt')
    },
    {
      label: 'Status',
      ...objFields('status')
    }
  ];

  const sortName = useMemo(() => {
    const sortObj = sortColumns.find((c) => c.key === sortKey);
    if(!sortObj) return 'Organization'

    return sortObj.label
  }, [sortKey]);

  return (
    <Dropdown menuItems={sortColumns}>
      <span className='user-sort__popover'>
        <span>Sort by: {sortName}</span>
        <img src={SortIcon} alt='Sort User by columns' />
      </span>
    </Dropdown>
  );
};

export default SortPopover;
