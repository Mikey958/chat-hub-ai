import { Outlet } from 'react-router';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
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
