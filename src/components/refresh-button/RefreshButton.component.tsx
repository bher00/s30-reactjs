import type { ButtonHTMLAttributes, ReactElement } from 'react';

import viteRefreshLogo from '~/assets/refresh.svg';
import './RefreshButton.style.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  showIcon?: boolean;
}

export const RefreshButton = (props: ButtonProps): ReactElement => {
  const { label, showIcon = false, ...rest } = props;

  return (
    <button {...rest}>
      {label}
      {showIcon && (
        <img src={viteRefreshLogo} className="refresh-button-logo" alt="Refresh" />
      )}
    </button>
  );
};
