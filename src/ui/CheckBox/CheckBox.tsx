import CheckedIcon from '@assets/icons/checkbox-fill-icon.svg?react';
import s from './CheckBox.module.scss';

interface CheckBoxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const CheckBox = ({ checked, onChange }: CheckBoxProps) => {
  const handleClick = () => {
    onChange(!checked);
  };

  return (
    <label className={s.checkbox}>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleClick}
        className={s.checkbox__input}
      />
      <span className={s.checkbox__custom}>
        {checked && <CheckedIcon className={s.checkbox__icon} />}
      </span>
    </label>
  );
};
