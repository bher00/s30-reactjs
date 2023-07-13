import './SwitchTheme.style.css';
import type { ChangeEvent, HTMLAttributes, ReactElement } from 'react';

import { useTheme } from '~/hooks/useTheme';

interface SwitchProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
  borderWidth?: number;
  borderActiveColor?: string;
  borderNotActiveColor?: string;
}

export const SwitchTheme = (props: SwitchProps): ReactElement => {
  const { ...rest } = props;

  const [theme, setTheme] = useTheme('light');

  const handleChangeTheme = (event: ChangeEvent<HTMLInputElement>): void => {
    const isChecked = event.currentTarget.checked;

    const isDarkmode: Theme = isChecked ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkmode);

    setTheme(event);
  };

  return (
    <div className="switch-container" {...rest}>
      <input
        type="checkbox"
        checked={theme === 'light' ? false : true}
        className="switch-input"
        onChange={handleChangeTheme}
      />
      <div className="switch-toggle"></div>
    </div>
  );
};
