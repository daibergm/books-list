import React from 'react';

// @Screens
import { AppScreen } from './App/';

// @Context
import { SessionState } from '../context/';

// @Components
import { Alert } from '../components/';

const RootScreen = () => {
  return (
    <SessionState>
      <>
        <AppScreen />
        <Alert />
      </>
    </SessionState>
  );
};

export default RootScreen;
