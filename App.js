import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import MainNavigation from './src/router'


import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import { loggedAction } from './src/redux/actions/authAction';
import Cart from './src/screen/Shop/Cart';
import HistoryBought from './src/screen/History/HistoryBought';
import HistoryService from './src/screen/History/HistoryService';



const App = () => {
  return (
    // <SafeAreaProvider>
    //   <Provider store={store}>
    //     <MainNavigation></MainNavigation>
    //   </Provider>
    // </SafeAreaProvider>
    <HistoryService/>
   

  )
}

export default App

const styles = StyleSheet.create({})