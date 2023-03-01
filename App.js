import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import MainNavigation from './src/router'
import Home from './src/screen/Main/Home';

import { ConfirmOTP, CreateNewPass, ForgetPass } from './src/screen/Auth';

import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from './src/redux/store';
import {loggedAction} from './src/redux/actions/authAction';
import ServiceDetail from './src/screen/ProductDetail/ServiceDetail';

import ProfileShop1 from './src/screen/Shop/ProfileShop1';

const App = () => {
  return (

    // <SafeAreaProvider>

    //   {/* <MainNavigation></MainNavigation> */}
    //   {/* <CreateNewPass/> */}

    //   <Provider store={store}>

    //   <MainNavigation></MainNavigation>
    //   </Provider>

    // </SafeAreaProvider>
    <>
      <ProfileShop1/>
    </>

  )
}

export default App

const styles = StyleSheet.create({})