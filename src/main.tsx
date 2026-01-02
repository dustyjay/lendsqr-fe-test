import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import ALL_ROUTES, { ROUTE_KEYS } from './router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider
      router={createBrowserRouter([
        ...ALL_ROUTES,
        {
          path: '*',
          element: <Navigate to={ROUTE_KEYS.LOGIN} />
        }
      ])}
    />
  </StrictMode>
);
