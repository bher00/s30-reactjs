import { expect, test } from 'vitest';

import { render, screen } from '~/__tests/config';
import { RefreshButton } from '~/components';

const roleLabel = 'Button label';

test('should render the button without label and icon', () => {
  render(<RefreshButton />);

  expect(screen.getByRole('refresh-button')).toBeDefined();
});

test('should display button label without icon', () => {
  render(<RefreshButton label={roleLabel} />);

  expect(screen.getByText(/button label/i)).toBeDefined();
});

test('should display icon without label', () => {
  render(<RefreshButton showIcon />);

  expect(screen.getByAltText('Refresh')).toBeDefined();
});

test('should display icon and label', () => {
  render(<RefreshButton showIcon label={roleLabel} />);

  expect(screen.getByAltText('Refresh')).toBeDefined();
  expect(screen.getByText(/button label/i)).toBeDefined();
});

test('should display only loading spinner even icon and label is being passed', () => {
  render(<RefreshButton loading={true} showIcon label={roleLabel} />);

  expect(screen.queryByRole('spinner')).not.toBeNull();
  expect(screen.queryByText(/button label/i)).toBeNull();
  expect(screen.queryByAltText('Refresh')).toBeNull();
});

test('should display customized icon', () => {
  const customIcon = <img src="" alt="CustomIcon" />;

  render(<RefreshButton showIcon icon={customIcon} />);

  expect(screen.queryByAltText('CustomIcon')).not.toBeNull();
});
