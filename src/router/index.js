import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';

import AuthStack from './AuthStack';
import { navigationRef1 } from './NavigationServices';
import {
  CART_SCREEN,
  CHAT,
  EDIT_PROFILE_ACCOUNT,
  EDIT_PROFILE_ADDRESS,
  FAVOURITE_SCREEN,
  HANDBOOK_DETAIL_SCREEN,
  HANDBOOK_SCREEN,
  HISTORY_PRODUCTS,
  HISTORY_SERVICES,
  HOME_SCREEN,
  LIST_CHAT,
  MAIN_TAB,
  PETS_DETAIL_SCREEN,
  PETS_SCREEN,
  PRODUCTS_DETAIL_SCREEN,
  PRODUCTS_SCREEN,
  PROFILE_SCREEN,
  PROFILE_SHOP_SCREEN,
  SERVICES_DETAIL_SCREEN,
  SERVICES_SCREEN
} from './ScreenName';

const Stack = createStackNavigator();

import { Home } from '../screen/Main';
import { ChangeAcount, ChangeAddress, Profile } from '../screen/Profile';
import { Handbook, HandbookDetail } from './../screen/Handbook';
import { MyTab } from './BottomNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { loggedAction, logoutAction } from '../redux/actions/authAction';
import HistoryBought from '../screen/History/HistoryBought';
import HistoryService from '../screen/History/HistoryService';
import { PetDetail } from '../screen/Pets';
import PetScreen from '../screen/Pets/PetScreen';
import { ProductScreen, ServiceScreen } from '../screen/Products';
import ProductsDetail from '../screen/Products/ProductsDetail';
import { ServiceDetail } from '../screen/Service';
import { Cart } from '../screen/Shop';
import ProfileShop from '../screen/Shop/ProfileShop';
import Favourites from './Favourites';
import { Chat, ListChat } from '../screen/Messenger';


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
      <Stack.Screen name={PROFILE_SHOP_SCREEN} component={ProfileShop} />
      <Stack.Screen name={LIST_CHAT} component={ListChat} />
      <Stack.Screen name={CHAT} component={Chat} />


      
      

    </Stack.Navigator>
  );
}

function MainNavigation() {
  const [checkLogin, setCheckLogin] = useState('');
  const authState = useSelector(state => state.authState.logged);
 

  const dispatch = useDispatch();
  

  useEffect(() => {
    const getCheckLogin = async () => {
      // const checkDangNhap = await AsyncStorage.getItem('checkLogin');
      setCheckLogin(checkDangNhap);
      // console.log('Check Dang Nhap', checkDangNhap);
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
<<<<<<< Updated upstream
     {authState == true ? <MainStack /> : <AuthStack />}
=======
      {/* {checkLogin === 'true' ? <MainStack /> : <AuthStack />} */}
      <MainStack/>
>>>>>>> Stashed changes
    </NavigationContainer>
  );
}

export default MainNavigation;
