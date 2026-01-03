import type { RouteObject } from 'react-router-dom';
import DashboardLayout from '../layouts/dashboard.layout';
import AuthRoute from './auth-route';
import UsersListPage from '../pages/users-list';
import UserDetailsPage from '../pages/user-details';
import UnauthRoute from './unauth-route';
import LoginPage from '../pages/auth/login';
import { ROUTE_KEYS } from '../util';

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
