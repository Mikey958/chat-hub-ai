import { Logo } from '../../shared/ui/Logo';
import s from './Welcome.module.scss';

export const Welcome = () => {
  return (
    <main className={s.welcomePage}>
      <section className={s.welcomePage__info}>
        <Logo />
        <h1 className={s.welcomePage__title}>Добро пожаловать!</h1>
        <p className={s.welcomePage__text}>
          Приветствуем Вас в мини-приложении
          <br />
          для удобного управления
          <br />
          мессенджерами!
        </p>
      </section>
      <section className={s.welcomePage__logic}>
        <p>TODO: чек бокс + условия</p>
        <p>TODO: кнопка далее</p>
      </section>
    </main>
  );
};
