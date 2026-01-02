import { Navigate } from 'react-router-dom';
import { ROUTE_KEYS } from '.';
import { STORAGE_KEYS } from '../util';
import type { JSX } from 'react';

const UnauthRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (token) {
    return <Navigate to={ROUTE_KEYS.HOME} />;
  }

  return children;
};
export default UnauthRoute;
