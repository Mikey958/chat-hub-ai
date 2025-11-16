import { ChatItem } from '@pages/ChatsPage/components/ChatItem';
import type { Chat } from '@pages/ChatsPage/components/ChatItem/ChatItem.tsx';
import s from './ChatsList.module.scss';

interface ChatListProps {
  chats: Chat[];
}

export const ChatsList = ({ chats }: ChatListProps) => {
  return (
    <section className={s.list}>
      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} />
      ))}
    </section>
  );
};
