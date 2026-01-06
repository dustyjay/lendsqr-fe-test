import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ALL_ROUTES from './router';
import { ROUTE_KEYS } from './util';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        ...ALL_ROUTES,
        {
          path: '*',
          element: <Navigate to={ROUTE_KEYS.USERS_LIST} />
        }
      ])}
    />
  </StrictMode>
);
