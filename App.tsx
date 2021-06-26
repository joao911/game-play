import React from 'react';
import {StatusBar} from 'react-native';

import Signin from './src/srceens/Signin';

const gameplay: React.FC = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Signin />
    </>
  );
};

export default gameplay;
