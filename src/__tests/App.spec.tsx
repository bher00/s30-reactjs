import { test } from 'vitest';

import { fireEvent, render, screen, waitFor } from '~/__tests/config';
import { handleInitialIndex } from '~/mocks/random-user';
import App from '~/App';

test('should display the title, email and refresh button', async () => {
  render(<App />);

  expect(screen.getByText(/full name/i)).toBeDefined();
  expect(screen.getByText(/email address/i)).toBeDefined();
  expect(screen.getAllByRole('value')).toBeDefined();
  expect(screen.getByRole('refresh-button')).toBeDefined();
});

test('should display loading spinner in button while calling the api', async () => {
  render(<App />);

  expect(screen.queryByAltText('Refresh')).toBeNull();

  await waitFor(async () => {
    expect(screen.findByRole('spinner')).not.toBeNull();
  });
});

test('should not display loading spinner in button after api call finished', async () => {
  render(<App />);

  expect(screen.queryByAltText('Refresh')).toBeNull();

  await waitFor(async () => {
    expect(screen.queryByRole('spinner')).not.toBeNull();
  });
  expect(screen.queryByRole('spinner')).toBeNull();
});

test('should display the fullname and email address of user in the label', async () => {
  render(<App />);

  await waitFor(async () => {
    expect(screen.queryByText(/mr. russell martin/i)).not.toBeNull();
    expect(screen.queryByText(/russell.martin@example.com/i)).not.toBeNull();
  });
});

test('should display the new fullname and email address of user in the label after refresh button clicked', async () => {
  render(<App />);

  await waitFor(async () => {
    expect(screen.queryByText(/mr. russell martin/i)).not.toBeNull();
    expect(screen.queryByText(/russell.martin@example.com/i)).not.toBeNull();
  });

  const refresh = screen.getByRole('refresh-button');
  fireEvent.click(refresh);
  handleInitialIndex(1);

  await waitFor(async () => {
    expect(screen.queryByText(/ms. saisha acharya/i)).not.toBeNull();
    expect(screen.queryByText(/saisha.acharya@example.com/i)).not.toBeNull();
  });
});
