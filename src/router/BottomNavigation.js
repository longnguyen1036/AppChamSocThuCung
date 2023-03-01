import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HOME_SCREEN,
  FAVOURITE_PRODUCTS_SCREEN,
  HANDBOOK_SCREEN,
  PROFILE_SCREEN,
} from './ScreenName';
import Home from '../screen/Main/Home';
import {FavouriteProducts} from '../screen/Favourite';
import {Handbook} from '../screen/Handbook';
import {Profile} from '../screen/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, activeTintColor: '#FF781F'}}
      initialRouteName="Feed">

      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={FAVOURITE_PRODUCTS_SCREEN}
        component={FavouriteProducts}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />{' '}
      <Tab.Screen
        name={HANDBOOK_SCREEN}
        component={Handbook}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={Profile}
        options={{
          tabBarLabel: 'Music',
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-play" color={'#FF781F'} size={30} style={{}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {MyTab};