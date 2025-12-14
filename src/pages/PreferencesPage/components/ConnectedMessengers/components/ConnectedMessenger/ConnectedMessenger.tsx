import s from './ConnectedMessenger.module.scss';

export interface item {
  id: string;
  name: string;
  icon: any;
  account_count: number;
  is_active: boolean;
}

interface ConnectedMessengerProps {
  item: item;
}

export const ConnectedMessenger = ({ item }: ConnectedMessengerProps) => {
  return <div className={s.connectedMessenger}>1</div>;
};
