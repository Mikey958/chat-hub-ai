import { useState } from 'react';
import clsx from 'clsx';
import arrow from '@assets/icons/arrow-top-icon.svg';
import s from './ConnectedMessenger.module.scss';

export interface item {
  id: string;
  name: string;
  icon: any;
  account_count: number;
  is_active: boolean;
}

interface ConnectedMessengerProps {
  item: item;
}

export const ConnectedMessenger = ({ item }: ConnectedMessengerProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div onClick={handleClick} className={s.connectedMessenger}>
      <div className={s.connectedMessenger__avatarWrapper}>
        <img src={item.icon} alt={item.name} />
      </div>
      <div className={s.connectedMessenger__wrapper}>
        <p className={s.connectedMessenger__title}>{item.name}</p>
        <p className={s.connectedMessenger__status}>Не подключен</p>
      </div>
      <img
        className={clsx(
          s.connectedMessenger__arrow,
          isActive && s.connectedMessenger__arrow_rotate,
        )}
        src={arrow}
        alt='стрелка вверх'
      />
    </div>
  );
};
