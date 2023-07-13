import type { DefaultBodyType, MockedRequest, RestHandler } from 'msw';

import { rest } from 'msw';
import { randomUser, randomUser2 } from './data/index';

let initialIndex = 0;
const user = [randomUser, randomUser2];

export const handleInitialIndex = (index: number): void => {
  initialIndex = index;
};

export const randomUserHandlers: RestHandler<MockedRequest<DefaultBodyType>>[] = [
  rest.get('https://randomuser.me/api', (_, response, context) => {
    return response(context.status(200), context.json(user[initialIndex]));
  }),
];
