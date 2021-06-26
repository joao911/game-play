import React from 'react';
import {StatusBar} from 'react-native';

import {Routes} from './src/routes';

const gameplay: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
};

export default gameplay;
