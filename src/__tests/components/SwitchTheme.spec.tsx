import { expect, test } from 'vitest';

import { fireEvent, render, screen } from '~/__tests/config';
import { SwitchTheme } from '~/components';

test('should display the title and switch', () => {
  render(<SwitchTheme />);

  expect(screen.getByText(/switch theme/i));
  expect(screen.queryByRole('theme')).not.toBeNull();
});

test('should display the custom title', () => {
  render(<SwitchTheme title="My Custom Title" />);

  expect(screen.getByText(/my custom title/i));
});

test('should change the checkbox after clicked', () => {
  render(<SwitchTheme title="My Custom Title" />);

  expect(screen.queryByRole('theme')).property('checked', false);

  fireEvent.click(screen.getByRole('theme'));
  expect(screen.queryByRole('theme')).property('checked', true);
});
