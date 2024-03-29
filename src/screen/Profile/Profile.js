import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Linking
} from 'react-native';
import React,{useState, useEffect, useCallback} from 'react';
import Block from '../../components/Block';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CHAT, EDIT_PROFILE_ACCOUNT, EDIT_PROFILE_ADDRESS, HISTORY_PRODUCTS, HISTORY_SERVICES, LIST_CHAT } from '../../router/ScreenName';
import { useDispatch, useSelector } from 'react-redux';
import { loggedAction, logoutAction } from '../../redux/actions/authAction';
import authApi from '../../api/authApi';
import { useFocusEffect } from '@react-navigation/native';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const [profileUser, setProfileUser] = useState()

  const getProfileUser = async () => {
    const user = await authApi.getProfile()
    setProfileUser(user.data.data)
  }

  useEffect(() => {
    getProfileUser();
  },[])

  useFocusEffect(
    useCallback(() => {
      getProfileUser();
    }, []),
  );

  const getLocation =  () => {
    const address = profileUser.address[0]

    const url = `https://www.google.com/maps/search/${encodeURIComponent(address)}`
    Linking.openURL(url)
}

  const signOut = async () => {
    Alert.alert(
        'Đăng xuất',
        'Bạn có chắc sẽ đăng xuất tài khoản này',
        [
          {
            text: 'Không',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Có',
            onPress: async () => {
            AsyncStorage.setItem('checkLogin', 'false');
            const checkLogin = await AsyncStorage.getItem('checkLogin'); 
            dispatch(logoutAction());
              
              // console.log('dang xuat')
            },
          },
        ],
        {cancelable: false},
      );
    };
    
  return (
    <View style={{alignItems: 'center', backgroundColor: '#dcdcdc', flex: 1}}>
      <View
        style={{
          height: '25%',
          width: '100%',
          backgroundColor: '#18A2E1',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Block
          alignCenter
          marginLeft={'24%'}
          marginTop={'8%'}>
          <Text
            style={{
              width: '100%',
              color: 'white',
              fontSize: 26,
              fontWeight: 'bold',
            }}>
            Thông tin tài khoản
          </Text>
        </Block>
      </View>
      <View
        style={{
          height: '22%',
          width: '90%',
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          marginTop: '-25%',
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              // paddingHorizontal: 5,

            }}>
            <View  style={{
               paddingHorizontal: 5,
               paddingVertical: 5,
            }}>
              <Image
                source={require('../../assets/image/profileavatar.png')}
                style={{}}></Image>
            </View>
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text style={{fontSize: 20, fontWeight: '700', color: 'black'}}>
                {profileUser?.nameAccount}
              </Text>
              <Text style={{marginTop: '2%'}}>{profileUser?.emailAccount}</Text>
              <TouchableOpacity onPress={() => getLocation()}>

              <Text style={{marginTop: 5, color: 'blue', width: '60%', height: 40}}>
                {profileUser?.address[0]}
              </Text>
              </TouchableOpacity>
              <Text style={{marginTop: '2%'}}>
                {profileUser?.numberphone[0]}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: '1%',
          }}>
          <TouchableOpacity
            onPress={()=> navigation.navigate(LIST_CHAT)}
            style={{
              backgroundColor: '#18A2E1',
              width: '30%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 10,
              borderRadius: 10,
              marginLeft: 10,
            }}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Chat</Text>
            <FontAwesome5 name="sms" size={25} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '90%', marginTop: '3%', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{backgroundColor: '#18A2E1', padding: 8, borderRadius: 8}}>
          <FontAwesome5 name="stream" size={30} color={'white'} />
        </TouchableOpacity>
        <View style={{marginLeft: '3%'}}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>

            Chỉnh sửa tài khoản
          </Text>
          <Text>Chỉnh sửa và quản lý tài khoản của bạn</Text>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          marginTop: '3%',
          backgroundColor: '#18A2E1',
          height: '12%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
          }}
          onPress={() => navigation.navigate(EDIT_PROFILE_ACCOUNT)}>
          <Text
            style={{
              width: '90%',
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Thay đổi mật khẩu
          </Text>
          <FontAwesome5 style={{width: '10%'}} name="chevron-right" size={18} color={'white'}/>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'white',
            width: '95%',
            marginTop: '3%',
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            marginTop: '3%',
          }}
          onPress={ ()=>navigation.navigate(EDIT_PROFILE_ADDRESS,{
            addressUser: profileUser?.address[0]
          })}>
          <Text
            style={{
              width: '90%',
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Thay địa chỉ
          </Text>
          <FontAwesome5 style={{width: '10%'}} name="chevron-right" size={18} color={'white'}/>
        </TouchableOpacity>
      </View>

      <View style={{width: '90%', marginTop: '3%', flexDirection: 'row'}}>
        <TouchableOpacity
          style={{backgroundColor: '#18A2E1', padding: 8, borderRadius: 8}}>
          <FontAwesome5 name="comments" size={30} color={'white'} />
        </TouchableOpacity>
        <View style={{marginLeft: '3%'}}>
          <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>
            Hỗ trợ và phản hồi
          </Text>
          <Text>Liên hệ với chúng tôi</Text>
        </View>
      </View>

      <View
        style={{
          width: '90%',
          marginTop: '3%',
          backgroundColor: '#18A2E1',
          height: '18%',
          borderRadius: 8,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
        onPress={ ()=>navigation.navigate(HISTORY_PRODUCTS)}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
          }}>
          <Text
            style={{
              width: '90%',
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Lịch sử mua hàng
          </Text>
          <FontAwesome5
            style={{width: '10%'}}
            name="chevron-right"
            size={18}
            color={'white'}
          />
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'white',
            width: '95%',
            marginTop: '3%',
          }}></View>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            marginTop: '3%',
          }}
          onPress={ ()=>navigation.navigate(HISTORY_SERVICES)}>
          <Text
            style={{
              width: '90%',
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Lịch sử đặt dịch vụ
          </Text>
          <FontAwesome5
            style={{width: '10%'}}
            name="chevron-right"
            size={18}
            color={'white'}
          />
        </TouchableOpacity>

       
        <View
          style={{
            borderWidth: 0.5,
            borderColor: 'white',
            width: '95%',
            marginTop: '3%',
          }}></View>
        <TouchableOpacity
        onPress={() => signOut()}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingHorizontal: 10,
            marginTop: '3%',
          }}>
          <Text
            style={{
              width: '90%',
              fontSize: 16,
              color: 'white',
              fontWeight: 'bold',
            }}>
            Đăng xuất
          </Text>
          <FontAwesome5
            style={{width: '10%'}}
            name="chevron-right"
            size={18}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
