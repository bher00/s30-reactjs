import { expect, test } from 'vitest';

import { render, screen } from '~/__tests/config';
import { Label } from '~/components';

const roleValue = 'value';
const roleTitle = 'title';

test('should display the label without title', () => {
  render(<Label value="My label" />);

  expect(screen.queryByRole(roleValue)).not.toBeNull();
  expect(screen.queryByRole(roleTitle)).toBeNull();
});

test('should display the label and title', () => {
  render(<Label value="Label" title="My title" />);

  expect(screen.queryByRole(roleValue)).not.toBeNull();
  expect(screen.queryByRole(roleTitle)).not.toBeNull();
});
