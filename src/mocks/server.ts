import type { SetupServer } from 'msw/node';

import { setupServer } from 'msw/node';
import { randomUserHandlers } from './random-user';

export const server: SetupServer = setupServer(...randomUserHandlers);
