import clsx from 'clsx';
import { NavLink } from 'react-router';
import ChatIcon from '@assets/icons/chats-icon.svg?react';
import PreferencesIcon from '@assets/icons/preferences-icon.svg?react';
import s from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <nav className={s.footer__nav}>
        <NavLink
          to='/chats'
          className={({ isActive }) =>
            clsx(s.footer__link, isActive && s.footer__link_active)
          }
        >
          <ChatIcon />
          <p className={s.footer__text}>Чаты</p>
        </NavLink>
        <NavLink
          to='/preferences'
          className={({ isActive }) =>
            clsx(s.footer__link, isActive && s.footer__link_active)
          }
        >
          <PreferencesIcon />
          <p className={s.footer__text}>Настройки</p>
        </NavLink>
      </nav>
    </footer>
  );
};
