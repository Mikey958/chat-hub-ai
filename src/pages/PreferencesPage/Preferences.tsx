import { AvailableMessengers } from '@pages/PreferencesPage/components/AvailableMessengers';
import { ConnectedMessengers } from '@pages/PreferencesPage/components/ConnectedMessengers';
import { ConnectPremium } from '@pages/PreferencesPage/components/ConnectPremium';
import s from './Preferences.module.scss';

export const Preferences = () => {
  return (
    <main className={s.preferencesPage}>
      <ConnectPremium />
      <ConnectedMessengers />
      <AvailableMessengers />
    </main>
  );
};
