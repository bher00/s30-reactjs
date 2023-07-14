import { expect, test } from 'vitest';

import { render, screen } from '~/__tests/config';
import { Title } from '~/components';

test('should display the title', () => {
  render(<Title title="My title" />);

  expect(screen.queryByRole('title')).not.toBeNull();
  expect(screen.getByText(/my title/i));
});
