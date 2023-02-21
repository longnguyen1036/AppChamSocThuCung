import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import MainNavigation from './src/router'
import Home from './src/screen/Main/Home';
import { ConfirmOTP, CreateNewPass, ForgetPass } from './src/screen/Auth';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <MainNavigation></MainNavigation> */}
      <CreateNewPass/>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})