import { useState } from 'react';
import { ChatsList } from '@pages/ChatsPage/components/ChatsList';
import { ErrorAuth } from '@pages/ChatsPage/components/ErrorAuth';
import { MessengerNotConnected } from '@pages/ChatsPage/components/MessengerNotConnected';
import { NoChats } from '@pages/ChatsPage/components/NoChats';
import { mockChats } from '@pages/ChatsPage/mocks/mockChats.ts';
import { Spinner } from '@ui/Spinner';
import s from './Chats.module.scss';

const isMessengerConnected = true;

export const Chats = () => {
  const [chats, setChats] = useState(mockChats);
  const [isConnected, setIsConnected] = useState(isMessengerConnected);
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthorizedError, setIsAuthorizedError] = useState(true);

  if (isLoading) {
    return (
      <main className={s.chatsPage}>
        <Spinner />
      </main>
    );
  }

  const hasChats = chats && chats.length > 0;

  return (
    <main className={s.chatsPage}>
      {!isConnected && <MessengerNotConnected />}
      {isAuthorizedError && <ErrorAuth handleClose={setIsAuthorizedError} />}
      {hasChats ? <ChatsList chats={chats} /> : <NoChats />}
    </main>
  );
};
