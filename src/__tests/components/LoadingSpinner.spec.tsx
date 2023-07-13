import { expect, test } from 'vitest';

import { render, screen } from '~/__tests/config';
import { LoadingSpinner } from '~/components';

test('should display the label without title', () => {
  render(<LoadingSpinner />);

  expect(screen.queryByRole('spinner')).not.toBeNull();
});
