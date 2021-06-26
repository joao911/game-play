import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../srceens/Signin';
import Home from '../srceens/Home';

const {Navigator, Screen} = createStackNavigator();

export const AuthRoutes = () => {
  return (
    <Navigator>
      <Screen name="SignIn" component={Signin} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};
