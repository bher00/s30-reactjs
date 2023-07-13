import type { Name } from '~/apis/user/types';

export const getFullName = (name: Name): string => {
  if (!name) return '-';

  const { first, last, title } = name;

  return `${title}. ${first} ${last}`;
};
