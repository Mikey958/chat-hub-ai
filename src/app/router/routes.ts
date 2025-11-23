import {
  CHATS_ROUTE,
  PREFERENCES_ROUTE,
  WELCOME_ROUTE,
} from '@app/router/constants.ts';
import { Chats } from '@pages/ChatsPage';
import { Preferences } from '@pages/PreferencesPage';
import { Welcome } from '@pages/WelcomePage';

export const routes = [
  {
    path: CHATS_ROUTE,
    Component: Chats,
    handle: { headerText: 'Чаты' },
  },
  {
    path: PREFERENCES_ROUTE,
    Component: Preferences,
    handle: { headerText: 'Настройки' },
  },
];

export const routesWithoutLayout = [
  {
    path: WELCOME_ROUTE,
    Component: Welcome,
  },
];
