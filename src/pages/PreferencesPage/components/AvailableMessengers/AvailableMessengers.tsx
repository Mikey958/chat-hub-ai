import { AvailableMessenger } from '@pages/PreferencesPage/components/AvailableMessengers/components/AvailableMessenger';
import { availableMessengers } from '@pages/PreferencesPage/components/AvailableMessengers/mocks/availableMessengers.ts';
import s from './AvailableMessengers.module.scss';

export const AvailableMessengers = () => {
  return (
    <section className={s.availableMessengers}>
      <h2 className={s.availableMessengers__title}>Доступные мессенджеры</h2>
      <div className={s.availableMessengers__list}>
        {availableMessengers.map((item) => (
          <AvailableMessenger item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};
