import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';



import MainNavigation from './src/router'


import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';






const App = () => {
  return (

    <SafeAreaProvider>
      <Provider store={store}>
        <MainNavigation></MainNavigation>
      </Provider>
    </SafeAreaProvider>
   
   

    // <SafeAreaProvider>
    //   <Provider store={store}>
    //     <MainNavigation></MainNavigation>
    //   </Provider>
    // </SafeAreaProvider>





  )
}

export default App

const styles = StyleSheet.create({})