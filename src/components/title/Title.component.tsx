import './Title.style.css';
import type { ReactElement, DetailedHTMLProps, HTMLAttributes } from 'react';

interface TitleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  title: string;
}

export const Title = (props: TitleProps): ReactElement => {
  const { title, ...rest } = props;

  return (
    <h1 role="title" {...rest}>
      {title}
    </h1>
  );
};
