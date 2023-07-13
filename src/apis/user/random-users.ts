import type { RandomUsersResponse } from './types';

import { getEmailAddress, getFullName } from '~/helper';
import { randomUserRequest } from '../request';

export const getRandomUsers = async (): Promise<RandomUsersResponse> => {
  try {
    const response = await randomUserRequest.get<RandomUsersResponse>('api');

    if (response.status === 200) {
      const user = response.data;
      const results = user?.results?.[0];

      const userFullName = getFullName(results?.name);
      const userEmail = getEmailAddress(results);

      localStorage.setItem('fullname', userFullName);
      localStorage.setItem('email', userEmail);

      return user;
    } else {
      return {} as RandomUsersResponse;
    }
  } catch (_) {
    return {} as RandomUsersResponse;
  }
};
