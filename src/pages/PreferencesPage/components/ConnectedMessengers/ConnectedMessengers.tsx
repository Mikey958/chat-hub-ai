import { EmptyConnectedMessengers } from '@pages/PreferencesPage/components/EmptyConnectedMessengers';
import s from './ConnectedMessengers.module.scss';

export const ConnectedMessengers = () => {
  return (
    <section className={s.connectedMessengers}>
      <h2 className={s.connectedMessengers__title}>Подключенные мессенджеры</h2>
      <EmptyConnectedMessengers />
    </section>
  );
};
