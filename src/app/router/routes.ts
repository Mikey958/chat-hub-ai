import { Home } from '../../pages/Home';
import { Preferences } from '../../pages/Preferences';
import { Welcome } from '../../pages/Welcome';

export const routes = [
  {
    path: '/',
    Component: Home,
    handle: { headerText: 'Чаты' },
  },
  {
    path: '/preferences',
    Component: Preferences,
    handle: { headerText: 'Настройки' },
  },
];

export const routesWithoutLayout = [
  {
    path: '/welcome',
    Component: Welcome,
  },
];
