import clsx from 'clsx';
import { Link } from 'react-router';
import blackCrown from '@assets/icons/crown-icon.svg';
import whiteCrown from '@assets/icons/crown-white-icon.svg';
import s from './ConnectPremiumPage.module.scss';

export const ConnectPremiumPage = () => {
  return (
    <main className={s.connectPremiumPage}>
      <div className={s.connectPremiumPage__header}>Подписка</div>
      <div className={s.connectPremiumPage__main}>
        <div className={s.connectPremiumPage__wrapper}>
          <img src={blackCrown} alt='Корона черного цвета' />
          <h1 className={s.connectPremiumPage__title}>Premium подписка</h1>
          <p className={s.connectPremiumPage__subtitle}>
            Разблокируйте все возможности <br /> приложения
          </p>
        </div>

        <div className={s.connectPremiumPage__activeAccounts}>
          <div className={s.connectPremiumPage__accountSquare}>
            <p className={s.connectPremiumPage__accountCount}>1</p>
            <p className={s.connectPremiumPage__accountText}>аккаунтов</p>
            <p className={s.connectPremiumPage__accountMax}>из 2</p>
          </div>
          <div className={s.connectPremiumPage__accountSquare}>
            <p className={s.connectPremiumPage__accountCount}>1</p>
            <p className={s.connectPremiumPage__accountText}>аккаунтов</p>
            <p className={s.connectPremiumPage__accountMax}>из 2</p>
          </div>
        </div>
        <h2 className={s.connectPremiumPage__premiumConditions}>
          Что входит в Premium
        </h2>

        <div className={s.connectPremiumPage__cards}>
          <div className={s.connectPremiumPage__card}>
            <h3 className={s.connectPremiumPage__cardTitle}>
              Больше аккаунтов
            </h3>
            <div className={s.connectPremiumPage__cardContainer}>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p className={s.connectPremiumPage__cardPlaneDesc}>
                  2 аккаунта
                </p>
              </div>
              <div className={s.connectPremiumPage__vline}></div>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p
                  className={clsx(
                    s.connectPremiumPage__cardPlaneDesc,
                    s.connectPremiumPage__cardPlaneDesc_green,
                  )}
                >
                  10 аккаунтов
                </p>
              </div>
            </div>
          </div>
          <div className={s.connectPremiumPage__card}>
            <h3 className={s.connectPremiumPage__cardTitle}>
              Лимит активных аккаунтов
            </h3>
            <div className={s.connectPremiumPage__cardContainer}>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p className={s.connectPremiumPage__cardPlaneDesc}>
                  2 аккаунта
                </p>
              </div>
              <div className={s.connectPremiumPage__vline}></div>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p
                  className={clsx(
                    s.connectPremiumPage__cardPlaneDesc,
                    s.connectPremiumPage__cardPlaneDesc_green,
                  )}
                >
                  5 аккаунтов
                </p>
              </div>
            </div>
          </div>
          <div className={s.connectPremiumPage__card}>
            <h3 className={s.connectPremiumPage__cardTitle}>
              Приоритетная синхронизация
            </h3>
            <div className={s.connectPremiumPage__cardContainer}>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p className={s.connectPremiumPage__cardPlaneDesc}>
                  стандартная
                </p>
              </div>
              <div className={s.connectPremiumPage__vline}></div>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p
                  className={clsx(
                    s.connectPremiumPage__cardPlaneDesc,
                    s.connectPremiumPage__cardPlaneDesc_green,
                  )}
                >
                  мгновенная
                </p>
              </div>
            </div>
          </div>
          <div className={s.connectPremiumPage__card}>
            <h3 className={s.connectPremiumPage__cardTitle}>Поддержка</h3>
            <div className={s.connectPremiumPage__cardContainer}>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p className={s.connectPremiumPage__cardPlaneDesc}>email</p>
              </div>
              <div className={s.connectPremiumPage__vline}></div>
              <div className={s.connectPremiumPage__textWrapper}>
                <p className={s.connectPremiumPage__cardPlane}>Free</p>
                <p
                  className={clsx(
                    s.connectPremiumPage__cardPlaneDesc,
                    s.connectPremiumPage__cardPlaneDesc_green,
                  )}
                >
                  приоритетная
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.connectPremiumPage__priceWrapper}>
          <p className={s.connectPremiumPage__priceText}>
            <span className={s.connectPremiumPage__price}>499 ₽</span>
            <span className={s.connectPremiumPage__perMounth}>/ месяц</span>
          </p>
          <p className={s.connectPremiumPage__priceDesc}>
            Первые 7 дней бесплатно, затем
            <br />
            499₽ в месяц
          </p>
        </div>
      </div>
      <div className={s.connectPremiumPage__footer}>
        <Link
          to={'https://www.tbank.ru/cf/8GB8wTqvqSj'}
          target='_blank'
          className={s.connectPremiumPage__subscribe}
        >
          <img src={whiteCrown} alt='Белая корона' />
          <span className={s.connectPremiumPage__subscribeText}>
            Оформить подписку
          </span>
        </Link>
        <p className={s.connectPremiumPage__info}>
          Отмена в любое время без дополнительных комиссий
        </p>
      </div>
    </main>
  );
};
