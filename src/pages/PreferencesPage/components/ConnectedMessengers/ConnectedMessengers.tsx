import { ConnectedMessenger } from '@pages/PreferencesPage/components/ConnectedMessengers/components/ConnectedMessenger';
import { connectedMessengers } from '@pages/PreferencesPage/components/ConnectedMessengers/mocks/connectedMessengers.ts';
import { EmptyConnectedMessengers } from '@pages/PreferencesPage/components/EmptyConnectedMessengers';
import s from './ConnectedMessengers.module.scss';

export const ConnectedMessengers = () => {
  const hasItems = connectedMessengers.length > 0;

  return (
    <section className={s.connectedMessengers}>
      <h2 className={s.connectedMessengers__title}>Подключенные мессенджеры</h2>
      {hasItems ? (
        <div className={s.connectedMessengers__list}>
          {connectedMessengers.map((item) => (
            <ConnectedMessenger item={item} key={item.id} />
          ))}
        </div>
      ) : (
        <EmptyConnectedMessengers />
      )}
    </section>
  );
};
