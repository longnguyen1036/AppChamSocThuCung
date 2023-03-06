import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HANDBOOK_SCREEN,
  HANDBOOK_DETAIL_SCREEN,
  MAIN_TAB,
  HOME_SCREEN,
  FAVOURITE_PRODUCTS_SCREEN,
  PROFILE_SCREEN,
} from './ScreenName';

const Stack = createStackNavigator();
import {navigationRef1} from './NavigationServices';
import AuthStack from './AuthStack';

import { MyTab } from './BottomNavigation';
import {Profile} from '../screen/Profile';
import {Home} from '../screen/Main';
import {Handbook, HandbookDetail} from './../screen/Handbook';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavouriteProducts } from '../screen/Favourite';

function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_TAB} component={MyTab} />
      <Stack.Screen name={HOME_SCREEN} component={Home} />
      <Stack.Screen
        name={FAVOURITE_PRODUCTS_SCREEN}
        component={FavouriteProducts}
      />
      <Stack.Screen name={PROFILE_SCREEN} component={Profile} />
      <Stack.Screen name={HANDBOOK_SCREEN} component={Handbook} />
      <Stack.Screen name={HANDBOOK_DETAIL_SCREEN} component={HandbookDetail} />
    </Stack.Navigator>
  );
}

function MainNavigation() {
  const [checkLogin, setCheckLogin] = useState('');

  

  const getCheckLogin = async () => {
    const checkDangNhap = await AsyncStorage.getItem('checkLogin');
    setCheckLogin(checkDangNhap);
    console.log('Check Dang Nhap', checkLogin);
  };
  useEffect(() => {
    getCheckLogin();
  }, [checkLogin]);
  return (
    <NavigationContainer ref={navigationRef1}>
      {checkLogin === 'true' ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default MainNavigation;
