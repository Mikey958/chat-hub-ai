import chatsImage from '../../assets/icons/chats-detail-icon.svg';
import s from './Logo.module.scss';

export const Logo = () => {
  return (
    <article className={s.logo}>
      <img className={s.logo__img} src={chatsImage} alt='Иконка чата' />
    </article>
  );
};
