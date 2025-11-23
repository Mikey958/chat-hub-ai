import { Link } from 'react-router';
import { PREFERENCES_ROUTE } from '@app/router/constants.ts';
import { Logo } from '@ui/Logo';
import s from './MessengerNotConnected.module.scss';

export const MessengerNotConnected = () => {
  return (
    <section className={s.container}>
      <Logo />
      <h1 className={s.container__title}>Нет подключенных чатов</h1>
      <p className={s.container__text}>
        Подключите мессенджеры для <br /> отображения чатов
      </p>
      <Link to={PREFERENCES_ROUTE} className={s.container__link}>
        Перейти в настройки
      </Link>
    </section>
  );
};
