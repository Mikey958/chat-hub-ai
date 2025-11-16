import s from './Spinner.module.scss';

export interface SpinnerProps {
  size?: number;
  color?: string;
  thickness?: number;
}

export const Spinner = ({
  size = 40,
  color = '#767676',
  thickness = 4,
}: SpinnerProps) => {
  const spinnerStyle = {
    width: size,
    height: size,
    border: `${thickness}px solid ${color}33`,
    borderTop: `${thickness}px solid ${color}`,
  };

  return <div className={s.spinner} style={spinnerStyle}></div>;
};
