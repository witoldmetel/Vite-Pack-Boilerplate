import { ReactNode, useState } from 'react';

const STATUS = {
  HOVERED: 'hovered',
  NORMAL: 'normal',
};

type LinkProps = {
  page: string;
  children: ReactNode;
};

export const Link = ({ page, children }: LinkProps) => {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => setStatus(STATUS.HOVERED);
  const onMouseLeave = () => setStatus(STATUS.NORMAL);

  return (
    <a
      className={status}
      href={page || '#'}
      target="_blank"
      rel="noreferrer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
};
