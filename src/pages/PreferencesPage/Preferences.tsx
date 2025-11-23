import { ConnectPremium } from '@pages/PreferencesPage/components/ConnectPremium';
import s from './Preferences.module.scss';

export const Preferences = () => {
  return (
    <main className={s.preferencesPage}>
      <ConnectPremium />
    </main>
  );
};
