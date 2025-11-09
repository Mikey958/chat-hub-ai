import s from './Button.module.scss';

interface ButtonProps {
  disabled?: boolean;
}

export const Button = ({ disabled = true }: ButtonProps) => {
  return (
    <button disabled={disabled} className={s.button}>
      Далее
    </button>
  );
};
