import './RefreshButton.style.css';
import type { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';

import { LoadingSpinner } from '..';
import viteRefreshLogo from '~/assets/refresh.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: ReactNode | string;
  showIcon?: boolean;
  icon?: ReactNode | string;
  loading?: boolean;
}

export const RefreshButton = (props: ButtonProps): ReactElement => {
  const {
    label,
    showIcon = false,
    loading = false,
    icon = <img src={viteRefreshLogo} className="refresh-button-logo" alt="Refresh" />,
    ...rest
  } = props;

  return (
    <button className={`${loading ? 'loading' : ''}`} {...rest}>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {label}
          {showIcon && icon}
        </>
      )}
    </button>
  );
};
