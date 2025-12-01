import { Link } from 'react-router';
import { CHAT_ROUTE } from '@app/router/constants.ts';
import { formatChatTime } from '@pages/ChatsPage/helpers/formatChatTime.ts';
import { formatUnreadCount } from '@pages/ChatsPage/helpers/formatUnreadCount.ts';
import s from './ChatItem.module.scss';

export interface Chat {
  id: string;
  lastmessage: string;
  fullname: string;
  avatar: string;
  unread_count: number;
  lastmessagetime: string;
}

interface ChatItemProps {
  chat: Chat;
}

export const ChatItem = ({ chat }: ChatItemProps) => {
  return (
    <Link to={CHAT_ROUTE + '/' + chat.id} className={s.card}>
      <img className={s.card__avatar} src={chat.avatar} alt={chat.fullname} />
      <div className={s.card__content}>
        <p className={s.card__fullname}>{chat.fullname}</p>
        <p className={s.card__lastMessage}>{chat.lastmessage}</p>
      </div>
      <div className={s.card__meta}>
        <p className={s.card__time}>{formatChatTime(chat.lastmessagetime)}</p>
        {chat.unread_count > 0 && (
          <p className={s.card__unread}>
            {formatUnreadCount(chat.unread_count)}
          </p>
        )}
      </div>
    </Link>
  );
};
