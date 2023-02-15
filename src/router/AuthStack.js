import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register, Welcome} from './../screen/Auth';

import {WELCOME_SCREEN, LOGIN_SCREEN, REGISTER_SCREEN} from './ScreenName';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={WELCOME_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={WELCOME_SCREEN} component={Welcome}></Stack.Screen>
      <Stack.Screen name={LOGIN_SCREEN} component={Login}></Stack.Screen>
      <Stack.Screen name={REGISTER_SCREEN} component={Register}></Stack.Screen>
    </Stack.Navigator>

  );
}

export default AuthStack;
