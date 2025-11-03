import { Chats } from '../../pages/ChatsPage';
import { Preferences } from '../../pages/PreferencesPage';
import { Welcome } from '../../pages/WelcomePage';

export const routes = [
  {
    path: '/chats',
    Component: Chats,
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
