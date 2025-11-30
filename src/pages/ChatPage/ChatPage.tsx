import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { useParams } from 'react-router';
import sendIcon from '@assets/icons/send-msg-icon.svg';
import { formatTime } from '@pages/ChatPage/helpers/formatTime.ts';
import s from './ChatPage.module.scss';

interface Message {
  id: string;
  author: string;
  text: string;
  ts: number;
}

export const ChatPage = () => {
  // const { id } = useParams();
  const [messages, setMessages] = useState<Message[]>(() => [
    {
      id: 'm1',
      author: 'other',
      text: 'Привет',
      ts: Date.now() - 1000 * 60 * 5,
    },
    {
      id: 'm2',
      author: 'me',
      text: 'Нуууу здароваа',
      ts: Date.now() - 1000 * 60 * 4,
    },
  ]);
  const [text, setText] = useState('');
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const distanceFromBottom =
      el.scrollHeight - (el.scrollTop + el.clientHeight);
    if (distanceFromBottom < 200) {
      el.scrollTop = el.scrollHeight;
    }
  }, [messages.length]);

  function sendMessage() {
    const trimmed = text.trim();
    if (!trimmed) return;
    const msg: Message = {
      id: String(Date.now()),
      author: 'me',
      text: trimmed,
      ts: Date.now(),
    };
    setMessages((prev) => [...prev, msg]);
    setText('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: `r-${Date.now()}`,
          author: 'other',
          text: 'Услышал тебя !',
          ts: Date.now(),
        },
      ]);
    }, 800);
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <main className={s.chatPage}>
      <div className={s.chatPage__header}>
        <div className={s.chatPage__avatarWrapper}>
          <img
            className={s.chatPage__avatar}
            src='https://i.pravatar.cc/200?img=12'
            alt='Автарка собеседника'
          />
        </div>
        <h1 className={s.chatPage__title}>Имя Фамилия</h1>
      </div>
      <div className={s.chatPage__container}>
        <section
          ref={listRef}
          role='list'
          aria-live='polite'
          className={s.chatPage__chat}
        >
          {messages.map((message) => (
            <div
              key={message.id}
              className={clsx(
                s.chatPage__message,
                message.author === 'me'
                  ? s.chatPage__message_me
                  : s.chatPage__message_other,
              )}
              role='listitem'
            >
              <p className={s.chatPage__messageText}>{message.text}</p>
              <p className={s.chatPage__messageTime}>
                {formatTime(message.ts)}
              </p>
            </div>
          ))}
        </section>

        <form
          className={s.chatPage__form}
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
        >
          <div className={s.chatPage__wrapper}>
            <textarea
              className={s.chatPage__textarea}
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
              rows={2}
              placeholder='Введите сообщение...'
            />
            <button type='submit' className={s.chatPage__button}>
              <img src={sendIcon} alt='Отправить' />
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};
