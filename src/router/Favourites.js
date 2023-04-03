import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  ALL_NOTIFICATION_SCREEN,
  FAVOURITE_PETS_SCREEN,
  FAVOURITE_PRODUCTS_SCREEN,
  FAVOURITE_SERVICES_SCREEN,
  PET_NOTIFICATION_SCREEN,
  PRODUCT_NOTIFICATION_SCREEN,
  SERVICE_NOTIFICATION_SCREEN,
} from './ScreenName';
import {
  AllNotification,
  PetNotification,
  ProductNotification,
  ServiceNotification,
} from '../screen/Notification';
import Block from '../components/Block';
import Text from '../components/Text';
import {FavouritePets, FavouriteProducts} from '../screen/Favourite';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const Favourites = () => {
  return (
    <Block flex={1} backgroundColor={'white'}>
      

        <Block width={'100%'} alignCenter>
          <Text size={23} marginTop={10} color={'black'} bold>
            Yêu thích
          </Text>
         </Block> 
      <Tab.Navigator
        
        screenOptions={{
          tabBarLabelStyle: {color: 'skyblue', fontSize: 10},
          
        }}>
        <Tab.Screen
          options={{title: 'Thú cưng'}}
          name={FAVOURITE_PETS_SCREEN}
          component={FavouritePets}
        />

        <Tab.Screen
          options={{title: 'Sản phẩm'}}
          name={FAVOURITE_PRODUCTS_SCREEN}
          component={FavouriteProducts}
        />
        <Tab.Screen
          options={{title: 'Dịch vụ'}}
          name={FAVOURITE_SERVICES_SCREEN}
          component={FavouritePets}
        />
      </Tab.Navigator>
    </Block>
  );
};

export default Favourites;

const styles = StyleSheet.create({});
