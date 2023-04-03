import React, {useEffect, useState} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  HOME_SCREEN,
  FAVOURITE_PRODUCTS_SCREEN,
  HANDBOOK_SCREEN,
  PROFILE_SCREEN,
} from './ScreenName';
import Home from '../screen/Main/Home';
import {FavouriteProducts} from '../screen/Favourite';
import {Handbook} from '../screen/Handbook';
import Profile from '../screen/Profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

function MyTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, activeTintColor: '#FF781F'}}
      initialRouteName="Home">

      <Tab.Screen
        name={HOME_SCREEN}
        component={Home}
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarLabel: 'Favourite',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="favorite" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={HANDBOOK_SCREEN}
        component={Handbook}
        options={{
          headerShown: false,
          tabBarLabel: 'Handbook',
          tabBarIcon: ({color, size}) => (
            <Foundation name="book-bookmark" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={PROFILE_SCREEN}
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="user" color={color} size={size}  />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {MyTab};