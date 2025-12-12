import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from '@app/layouts/Layout';
import { WELCOME_ROUTE } from '@app/router/constants.ts';
import { routes, routesWithoutLayout } from './routes';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={WELCOME_ROUTE} replace />,
  },
  {
    Component: Layout,
    children: routes,
  },
  ...routesWithoutLayout,
]);

export default AppRouter;
