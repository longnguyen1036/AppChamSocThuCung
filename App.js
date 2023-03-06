import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



import MainNavigation from './src/router'


import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './src/redux/store';
import { loggedAction } from './src/redux/actions/authAction';
import ProfileShop1 from './src/screen/Shop/ProfileShop1';
import { FavouriteProducts } from './src/screen/Favourite';



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
    // <FavouriteProducts/>





  )
}

export default App

const styles = StyleSheet.create({})