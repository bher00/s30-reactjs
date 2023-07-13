import type { Result } from '~/apis/user/types';

export const getEmailAddress = (result: Result): string => {
  if (!result) return '-';

  const { email } = result;

  return email;
};
