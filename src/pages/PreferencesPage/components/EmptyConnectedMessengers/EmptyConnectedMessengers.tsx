import s from './EmptyConnectedMessengers.module.scss';

export const EmptyConnectedMessengers = () => {
  return (
    <article className={s.emptyContainer}>
      <p className={s.emptyContainer__title}>Нет подключенных мессенджеров</p>
    </article>
  );
};
