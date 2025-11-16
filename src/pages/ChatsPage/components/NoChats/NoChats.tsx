import { Logo } from '@ui/Logo';
import s from './NoChats.module.scss';

export const NoChats = () => {
  return (
    <section className={s.container}>
      <Logo />
      <h1 className={s.container__title}>Здесь пусто</h1>
      <p className={s.container__text}>Вы ещё не получали сообщений</p>
    </section>
  );
};
