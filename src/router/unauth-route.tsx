import { Navigate } from 'react-router-dom';
import { ROUTE_KEYS, STORAGE_KEYS } from '../util';
import type { JSX } from 'react';

const UnauthRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (token) {
    return <Navigate to={ROUTE_KEYS.USERS_LIST} />;
  }

  return children;
};
export default UnauthRoute;
