import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import 'react-native-gesture-handler';


import MainNavigation from './src/router'

const App = () => {
  return (
    <SafeAreaProvider>
      <MainNavigation></MainNavigation>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({})