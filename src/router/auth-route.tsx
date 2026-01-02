import { Navigate } from 'react-router-dom';
import { ROUTE_KEYS } from '.';
import { STORAGE_KEYS } from '../util';
import type { JSX } from 'react';

const AuthRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);

  if (!token) {
    localStorage.clear();
    return <Navigate to={ROUTE_KEYS.LOGIN} />;
  }

  return children;
};
export default AuthRoute;
