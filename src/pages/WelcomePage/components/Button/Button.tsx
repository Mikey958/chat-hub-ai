import { useNavigate } from 'react-router';
import { CHATS_ROUTE } from '@app/router/constants.ts';
import s from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
}

export const Button = ({ disabled = true }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(CHATS_ROUTE);
    }
  };

  return (
    <button onClick={handleClick} disabled={disabled} className={s.button}>
      Далее
    </button>
  );
};
