import { Outlet } from 'react-router';
import { Footer } from '../../shared/ui/Footer';
import { Header } from '../../shared/ui/Header';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <div className={s.layout}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
