import { createBrowserRouter } from 'react-router';
import { Layout } from '../layouts/Layout';
import { routes, routesWithoutLayout } from './routes';

const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: routes,
  },
  ...routesWithoutLayout,
]);

export default AppRouter;
