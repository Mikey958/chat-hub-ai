import { useNavigate } from 'react-router';
import s from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
}

export const Button = ({ disabled = true }: ButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate('/chats');
    }
  };

  return (
    <button onClick={handleClick} disabled={disabled} className={s.button}>
      Далее
    </button>
  );
};
