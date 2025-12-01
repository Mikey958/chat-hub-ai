import {
  CHAT_ROUTE,
  CHATS_ROUTE,
  PREFERENCES_ROUTE,
  WELCOME_ROUTE,
} from '@app/router/constants.ts';
import { ChatPage } from '@pages/ChatPage';
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
  {
    path: CHAT_ROUTE + '/:chatId',
    Component: ChatPage,
    handle: { headerText: 'Чат' },
  },
];

export const routesWithoutLayout = [
  {
    path: WELCOME_ROUTE,
    Component: Welcome,
  },
];
