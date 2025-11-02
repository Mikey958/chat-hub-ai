import { Outlet, useMatches } from 'react-router';

interface RouteHandle {
  headerText?: string;
}

export const Layout = () => {
  const matches = useMatches();
  const currentMatch = matches[matches.length - 1];
  const headerText =
    (currentMatch.handle as RouteHandle)?.headerText || 'я шапка';

  return (
    <div>
      <header>{headerText}</header>
      <Outlet />
      <footer>я подвал</footer>
    </div>
  );
};
