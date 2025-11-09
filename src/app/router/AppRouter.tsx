import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from '@app/layouts/Layout';
import { routes, routesWithoutLayout } from './routes';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/chats' replace />,
  },
  {
    Component: Layout,
    children: routes,
  },
  ...routesWithoutLayout,
]);

export default AppRouter;
