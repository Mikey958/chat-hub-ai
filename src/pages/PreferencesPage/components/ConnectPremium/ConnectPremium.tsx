import { Link } from 'react-router';
import { CONNECT_PREMIUM_ROUTE } from '@app/router/constants.ts';
import arrowIcon from '@assets/icons/arrow-icon.svg';
import premiumIcon from '@assets/icons/premium-icon.svg';
import s from './ConnectPremium.module.scss';

export const ConnectPremium = () => {
  return (
    <Link to={CONNECT_PREMIUM_ROUTE} className={s.premium}>
      <div className={s.premium__circle}>
        <img src={premiumIcon} alt='premium icon' />
      </div>
      <div className={s.premium__info}>
        <h2 className={s.premium__title}>Получить Premium</h2>
        <p className={s.premium__text}>Подключайте больше аккаунтов</p>
      </div>
      <div className={s.premium__link}>
        <img src={arrowIcon} alt='arrow icon' />
      </div>
    </Link>
  );
};
