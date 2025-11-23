import { Link } from 'react-router';
import arrowIcon from '@assets/icons/arrow-icon.svg';
import premiumIcon from '@assets/icons/premium-icon.svg';
import s from './ConnectPremium.module.scss';

export const ConnectPremium = () => {
  return (
    <article className={s.premium}>
      <div className={s.premium__circle}>
        <img src={premiumIcon} alt='premium icon' />
      </div>
      <div className={s.premium__info}>
        <h2 className={s.premium__title}>Получить Premium</h2>
        <p className={s.premium__text}>Подключайте больше аккаунтов</p>
      </div>
      <Link className={s.premium__link} to='#'>
        <img src={arrowIcon} alt='arrow icon' />
      </Link>
    </article>
  );
};
