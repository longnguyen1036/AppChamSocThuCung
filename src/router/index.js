import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HANDBOOK_SCREEN, HANDBOOK_DETAIL_SCREEN} from './ScreenName';
import {Handbook, HandbookDetail} from './../screen/Handbook';
const Stack = createStackNavigator();
import {navigationRef1} from './NavigationServices';
import AuthStack from './AuthStack';

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={HANDBOOK_SCREEN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={HANDBOOK_SCREEN} component={Handbook} />
      <Stack.Screen name={HANDBOOK_DETAIL_SCREEN} component={HandbookDetail} />
    </Stack.Navigator>
  );

}

function MainNavigation(){
    return(
        <NavigationContainer ref={navigationRef1}>
            <AuthStack></AuthStack>
        </NavigationContainer>
    )
}

export default MainNavigation;
