import { StyleSheet, Text, View, Alert } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';

import MainNavigation from './src/router'


import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import notifee, { AndroidImportance, AndroidStyle } from '@notifee/react-native';
import { NotifierWrapper } from 'react-native-notifier';


const createChannel = async () => {
  const channel = await notifee.createChannel({
    id: 'alarm',
    name: 'Firing alarms & timers',
    lights: false,
    vibration: true,
    importance: AndroidImportance.DEFAULT,
  });
  return channel
}

const App = () => {
  useEffect(() => {
    createChannel()
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    // Extract the message data
      const { title, body } = remoteMessage.notification;

       // Display a notification using Notifee
       await notifee.displayNotification({
        title,
        body,
        android: {
          channelId: 'alarm', // Use the channel ID
          pressAction: {
            id: 'default', // Use the default press action
          },
          style: {
            type: AndroidStyle.BIGPICTURE,
            picture: 'https://picsum.photos/800/450',
          },
        },
      });
      console.log('notification',remoteMessage )
    });

    return unsubscribe;
  }, []);
  return (
    <SafeAreaProvider>
      <NotifierWrapper>
      <Provider store={store}>
        <MainNavigation></MainNavigation>
      </Provider>
      </NotifierWrapper>
    </SafeAreaProvider>
  )
}

export default App

