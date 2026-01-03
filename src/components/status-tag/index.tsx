import { useMemo, type CSSProperties, type FC } from 'react';
import type { USER_TABLE_STATUS } from '../../pages/users-list/dummy-data';
import './index.scss'

const statusMapping: Record<USER_TABLE_STATUS, CSSProperties> = {
  Active: {
    color: '#39CD62',
    background: 'rgba(57, 205, 98, 0.06)'
  },
  Blacklisted: {
    color: '#E4033B',
    background: 'rgba(228, 3, 59, 0.1)'
  },
  Inactive: {
    color: '#545F7D',
    background: 'rgba(84, 95, 125, 0.06)'
  },
  Pending: {
    color: '#E9B200',
    background: 'rgba(233, 178, 0, 0.1)'
  }
};

type Props = {
  status: USER_TABLE_STATUS;
};

const StatusTag: FC<Props> = ({ status }) => {
  const styles = useMemo(() => {
    return statusMapping[status];
  }, [status]);

  return <span className='status-tag' style={styles}>{status}</span>;
};

export default StatusTag
