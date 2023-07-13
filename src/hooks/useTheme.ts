import { useEffect, useState } from 'react';

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type UseThemeReturn = [string, (event: ChangeEvent) => void];

export const useTheme = (initialTheme: Theme): UseThemeReturn => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const handleChange = (event: ChangeEvent): void =>
    setTheme(event.target.checked ? 'dark' : 'light');

  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme') ?? 'light';
    document.body.setAttribute('data-theme', localStorageTheme);
    setTheme(localStorageTheme as Theme);
  }, []);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, handleChange];
};
