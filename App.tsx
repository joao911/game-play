import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/srceens/Home';

import Signin from './src/srceens/Signin';
const gameplay: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Home />
    </>
  );
};

export default gameplay;
