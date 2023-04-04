import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  HANDBOOK_SCREEN,
  HANDBOOK_DETAIL_SCREEN,
  MAIN_TAB,
  HOME_SCREEN,
  FAVOURITE_PRODUCTS_SCREEN,
  PROFILE_SCREEN,
  HISTORY_PRODUCTS,
  HISTORY_SERVICES,
  PETS_SCREEN,
  PETS_DETAIL_SCREEN,
  PRODUCTS_SCREEN,
  PRODUCTS_DETAIL_SCREEN,
  SERVICES_SCREEN,
  SERVICES_DETAIL_SCREEN,
  PROFILE_SHOP_SCREEN,
  EDIT_PROFILE_ACCOUNT, 
  EDIT_PROFILE_ADDRESS, 
  CART_SCREEN,
  FAVOURITE_PETS_SCREEN,
  FAVOURITE_SERVICES_SCREEN,
  FAVOURITE_SCREEN
} from './ScreenName';

const Stack = createStackNavigator();
import {navigationRef1} from './NavigationServices';
import AuthStack from './AuthStack';

import { MyTab } from './BottomNavigation';
import {ChangeAcount, ChangeAddress, Profile} from '../screen/Profile';
import {Home} from '../screen/Main';
import {Handbook, HandbookDetail} from './../screen/Handbook';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { FavouritePets, FavouriteProducts, FavouriteServices } from '../screen/Favourite';
import HistoryBought from '../screen/History/HistoryBought';
import HistoryService from '../screen/History/HistoryService';
import PetScreen from '../screen/Products/PetScreen';
import PetDetail from '../screen/ProductDetail/PetDetail';
import ProductScreen from '../screen/Products/ProductScreen';
import ProductsDetail from '../screen/ProductDetail/ProductsDetail';
import { ServiceScreen } from '../screen/Products';
import { ServiceDetail } from '../screen/ProductDetail';
import { Cart, ProfileShop1 } from '../screen/Shop';
import { useDispatch, useSelector } from 'react-redux';
import { loggedAction, logoutAction } from '../redux/actions/authAction';
import Favourite from './Favourites';
import Favourites from './Favourites';


function MainStack() {
  return (
    <Stack.Navigator
      initialRouteName={MAIN_TAB}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={MAIN_TAB} component={MyTab} />
      <Stack.Screen name={HOME_SCREEN} component={Home} />
      <Stack.Screen  name={FAVOURITE_SCREEN} component={Favourites} options={{headerShown: true, title: 'Yêu thích'}}/>
     
      <Stack.Screen name={PROFILE_SCREEN} component={Profile} />
      <Stack.Screen name={HANDBOOK_SCREEN} component={Handbook} />
      <Stack.Screen name={HANDBOOK_DETAIL_SCREEN} component={HandbookDetail} />

      <Stack.Screen name={HISTORY_PRODUCTS} component={HistoryBought} />
      <Stack.Screen name={HISTORY_SERVICES} component={HistoryService} />

      <Stack.Screen name={PETS_SCREEN} component={PetScreen} />
      <Stack.Screen name={PETS_DETAIL_SCREEN} component={PetDetail} />

      <Stack.Screen name={PRODUCTS_SCREEN} component={ProductScreen} />
      <Stack.Screen name={PRODUCTS_DETAIL_SCREEN} component={ProductsDetail} />

      <Stack.Screen name={SERVICES_SCREEN} component={ServiceScreen} />
      <Stack.Screen name={SERVICES_DETAIL_SCREEN} component={ServiceDetail} />
      
      <Stack.Screen name={EDIT_PROFILE_ACCOUNT} component={ChangeAcount} />
      <Stack.Screen name={EDIT_PROFILE_ADDRESS} component={ChangeAddress} />

      <Stack.Screen name={CART_SCREEN} component={Cart} />
      <Stack.Screen name={PROFILE_SHOP_SCREEN} component={ProfileShop1} />
      

    </Stack.Navigator>
  );
}

function MainNavigation() {
  const [checkLogin, setCheckLogin] = useState('');
  const authState = useSelector(state => state.authState.logged);
  console.log('authStatedasdasd', authState);

  const dispatch = useDispatch();
  

  useEffect(() => {
    const getCheckLogin = async () => {
      const checkDangNhap = await AsyncStorage.getItem('checkLogin');
      setCheckLogin(checkDangNhap);
      console.log('Check Dang Nhap', checkDangNhap);
      if (checkDangNhap == true) {
        dispatch(loggedAction());
      } else {
        dispatch(logoutAction());
      }
    };
    getCheckLogin();
  }, [checkLogin]);
  return (
    <NavigationContainer ref={navigationRef1}>
     {authState == true ? <MainStack /> : <AuthStack />}
     {/* <AuthStack/> */}
    </NavigationContainer>
  );
}

export default MainNavigation;
