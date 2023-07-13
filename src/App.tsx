import './App.css';
import type { ReactElement } from 'react';

import { useEffect, useState } from 'react';
import { Label, RefreshButton, SwitchTheme } from '~/components';
import { getRandomUsers } from '~/apis/user';
import { getEmailAddress, getFullName } from '~/helper';

const App = (): ReactElement => {
  const [randomUserLoading, setRandomUserLoading] = useState(false);
  const [fullname, setFullname] = useState('-');
  const [email, setEmail] = useState('-');

  const handleGetRandomUsers = async (): Promise<void> => {
    setRandomUserLoading(true);
    const user = await getRandomUsers();
    const results = user?.results?.[0];

    const userFullName = getFullName(results?.name);
    const userEmail = getEmailAddress(results);

    setFullname(userFullName);
    setEmail(userEmail);
    setRandomUserLoading(false);
  };

  const handleRefreshButton = (): void => {
    !randomUserLoading && handleGetRandomUsers();
  };

  useEffect(() => {
    handleGetRandomUsers();
  }, []);

  return (
    <div className="app-container">
      <h1>S30 ReactJS</h1>
      <div className="refresh-button-container">
        <>
          <h4>Switch Theme</h4>
          <SwitchTheme />
        </>
        <RefreshButton
          showIcon
          loading={randomUserLoading}
          onClick={handleRefreshButton}
        />
      </div>
      <Label value={fullname} title="Full name" />
      <Label value={email} title="Email Address" />
    </div>
  );
};

export default App;
