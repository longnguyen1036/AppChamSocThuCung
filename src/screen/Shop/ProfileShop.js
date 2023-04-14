import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { PET_PROFILE_SHOP_SCREEN, PRODUCT_PROFILE_SHOP_SCREEN, SERVICE_PROFILE_SHOP_SCREEN } from '../../router/ScreenName';

import Block from '../../components/Block';
import Text from '../../components/Text';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { PetProfileShop, ProductProfileShop, ServiceProfileShop } from '.';
import { useNavigation, useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const ProfileShop = () => {
  const navigation = useNavigation()
  const router = useRoute()
  const {_id, name, adress} = router.params
  return (
    <Block flex={1} backgroundColor={'#dcdcdc'}>
      

        <View style={{backgroundColor: '#dcdcdc', height: '35%'}}>
          <View
            style={{
              backgroundColor: '#18A2E1',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              paddingVertical: 10,
              height: 150,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesome5 name="chevron-left" size={25} color={'white'} />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome5 name="search" size={25} color={'white'} />
            </TouchableOpacity>
          </View>

          <View style={{paddingHorizontal: 20, marginTop: -60}}>
            <View
              style={{backgroundColor: 'white', height: 200, borderRadius: 8}}>
              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}>
                  <View style={{backgroundColor: '#18A2E1', borderRadius: 8}}>
                    <Image
                      source={require('./../../assets/image/matpet.png')}
                      style={{}}></Image>
                  </View>
                  <View style={{marginLeft: 10, justifyContent: 'center'}}>
                    <Text
                      style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                      {name}
                    </Text>
                    <Text style={{marginTop: 10}}>Store</Text>
                    <Text style={{marginTop: 5, width: '40%'}}>
                      {adress}
                    </Text>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: '2%',
                  marginHorizontal: '3%',
                }}>
                <View
                  style={{
                    width: '30%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity>
                    <Ionicons name="star" size={18} color={'#F80202'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: '2%'}}>
                    <Ionicons name="star" size={18} color={'#F80202'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: '2%'}}>
                    <Ionicons name="star" size={18} color={'#F80202'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: '2%'}}>
                    <Ionicons name="star" size={18} color={'#F80202'} />
                  </TouchableOpacity>
                  <TouchableOpacity style={{marginLeft: '2%'}}>
                    <Ionicons name="star-outline" size={18} color={'#F80202'} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  style={{
                    marginLeft: '40%',
                    backgroundColor: '#18A2E1',
                    width: '35%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    padding: 5,
                    borderRadius: 10,
                  }}>
                  <Text style={{color: 'white', fontWeight: 'bold'}}>Chat</Text>
                  <FontAwesome5 name="sms" size={25} color={'white'} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
     <Block flex={1} paddingHorizontal={10} backgroundColor={'#dcdcdcs'}>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarStyle: {backgroundColor: '#dcdcdc'},
        }}>
        <Tab.Screen
          
          options={{title: 'Thú cưng'}}
          name={PET_PROFILE_SHOP_SCREEN}
          component={PetProfileShop}
          initialParams={{_id: _id}}
        />

        <Tab.Screen
          options={{title: 'Sản phẩm'}}
          name={PRODUCT_PROFILE_SHOP_SCREEN}
          component={ProductProfileShop}
          initialParams={{_id: _id}}
        />
        <Tab.Screen
          options={{title: 'Dịch vụ'}}
          name={SERVICE_PROFILE_SHOP_SCREEN}
          component={ServiceProfileShop}
          initialParams={{_id: _id}}
        />
      </Tab.Navigator>
      </Block>
    </Block>
  );
};

export default ProfileShop;

const styles = StyleSheet.create({});
