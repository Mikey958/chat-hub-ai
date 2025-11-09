import { useMatches } from 'react-router';
import s from './Header.module.scss';

interface RouteHandle {
  headerText?: string;
}

export const Header = () => {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const headerText =
    (currentMatch.handle as RouteHandle)?.headerText || 'я шапка';

  return (
    <header className={s.header}>
      <h1 className={s.header__title}>{headerText}</h1>
    </header>
  );
};
