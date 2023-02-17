import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


import MainNavigation from './src/router'
import Home from './src/screen/Main/Home';

const App = () => {
  return (
    <SafeAreaProvider>
      {/* <MainNavigation></MainNavigation> */}
      <Home></Home>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})