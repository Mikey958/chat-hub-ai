import type { Dispatch, SetStateAction } from 'react';
import clsx from 'clsx';
import { Link } from 'react-router';
import cross from '@assets/icons/cross-icon.svg';
import warn from '@assets/icons/warn-icon.svg';
import s from './ErrorAuth.module.scss';

interface ErrorAuthProps {
  handleClose: Dispatch<SetStateAction<boolean>>;
}

export const ErrorAuth = ({ handleClose }: ErrorAuthProps) => {
  return (
    <article className={s.errorContainer}>
      <button
        onClick={() => handleClose(false)}
        className={s.errorContainer__close}
      >
        <img src={cross} alt='cross icon' />
      </button>
      <div className={s.errorContainer__wrapper}>
        <img className={s.errorContainer__warn} src={warn} alt='warn icon' />
        <div className={s.errorContainer__info}>
          <h2 className={s.errorContainer__title}>Требуется авторизация</h2>
          <p className={s.errorContainer__text}>
            Необходимо повторно авторизоваться
            <br />в мессенджере
          </p>
        </div>
      </div>
      <div className={s.errorContainer__buttons}>
        <button
          onClick={() => handleClose(false)}
          className={clsx(
            s.errorContainer__button,
            s.errorContainer__button_type_later,
          )}
        >
          Позже
        </button>
        <Link
          to='/preferences'
          className={clsx(
            s.errorContainer__button,
            s.errorContainer__button_type_link,
          )}
        >
          Настройки
        </Link>
      </div>
    </article>
  );
};
