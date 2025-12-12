import s from './AvailableMessenger.module.scss';

export interface item {
  id: string;
  name: string;
  icon: any;
}

interface AvailableMessengerProps {
  item: item;
}

export const AvailableMessenger = ({ item }: AvailableMessengerProps) => {
  return (
    <article className={s.availableMessenger}>
      <div className={s.availableMessenger__avatarWrapper}>
        <img src={item.icon} alt={item.name} />
      </div>
      <div className={s.availableMessenger__wrapper}>
        <p className={s.availableMessenger__title}>{item.name}</p>
        <p className={s.availableMessenger__status}>Не подключен</p>
      </div>
      <button className={s.availableMessenger__connect}>Подключить</button>
    </article>
  );
};
