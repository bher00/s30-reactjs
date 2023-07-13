import './LoadingSpinner.style.css';
import type { HTMLAttributes, ReactElement } from 'react';

interface LoadingSpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
  borderWidth?: number;
  borderActiveColor?: string;
  borderNotActiveColor?: string;
}

export const LoadingSpinner = (props: LoadingSpinnerProps): ReactElement => {
  const {
    size = 15,
    borderWidth = 2,
    borderActiveColor = '#3498db',
    borderNotActiveColor = '#f3f3f3',
    ...rest
  } = props;

  return (
    <div
      style={{
        width: size,
        height: size,
        border: `${borderWidth}px solid ${borderNotActiveColor}`,
        borderTop: `${borderWidth}px solid ${borderActiveColor}`,
      }}
      className="loader"
      {...rest}
    />
  );
};
