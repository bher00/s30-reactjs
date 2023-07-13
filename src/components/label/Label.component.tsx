import './Label.style.css';
import type { HTMLAttributes, ReactElement } from 'react';

interface LabelProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  value: string;
}

export const Label = (props: LabelProps): ReactElement => {
  const { value, title, ...rest } = props;

  return (
    <div className="label-container" {...rest}>
      {title && <label>{title}:</label>}
      <div className="label-value">{value}</div>
    </div>
  );
};
