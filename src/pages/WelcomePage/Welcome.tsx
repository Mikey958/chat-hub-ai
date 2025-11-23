import { useState } from 'react';
import { Link } from 'react-router';
import { CheckBox } from '@ui/CheckBox';
import { Logo } from '@ui/Logo';
import { Button } from './components/Button';
import s from './Welcome.module.scss';

export const Welcome = () => {
  const [checked, setChecked] = useState(false);

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
        <div className={s.welcomePage__politics}>
          <CheckBox checked={checked} onChange={setChecked} />
          <p className={s.welcomePage__rule}>
            Согласен с{' '}
            <Link className={s.welcomePage__link} to='#'>
              условиями использования <br /> приложения
            </Link>
          </p>
        </div>
        <Button disabled={!checked} />
      </section>
    </main>
  );
};
