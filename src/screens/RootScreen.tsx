import React from 'react';

// @Screens
import { AppScreen } from './App/';

// @Context
import { SessionState } from '../context/';

const RootScreen = () => {
  return (
    <SessionState>
      <AppScreen />
    </SessionState>
  );
};

export default RootScreen;
