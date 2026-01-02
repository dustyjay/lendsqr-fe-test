import type { RouteObject } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard.layout';
import AuthRoute from './auth-route';
import UsersListPage from '../pages/users-list';
import UserDetailsPage from '../pages/user-details';
import UnauthRoute from './unauth-route';
import LoginPage from '../pages/auth/login';

export const ROUTE_KEYS = {
  LOGIN: '/login',
  HOME: '/',
  USERS_LIST: '/users',
  USER_DETAILS: '/users/:id'
};

const ALL_ROUTES: RouteObject[] = [
  {
    path: ROUTE_KEYS.LOGIN,
    element: (
      <UnauthRoute>
          <LoginPage />
      </UnauthRoute>
    )
  },
  {
    path: ROUTE_KEYS.HOME,
    element: (
      <AuthRoute>
        <DashboardLayout />
      </AuthRoute>
    ),
    children: [
      {
        path: ROUTE_KEYS.USERS_LIST,
        element: <UsersListPage />
      },
      {
        path: ROUTE_KEYS.USER_DETAILS,
        element: <UserDetailsPage />
      }
    ]
  }
];

export default ALL_ROUTES;
