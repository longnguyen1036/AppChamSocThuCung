import React, {useEffect, useState} from 'react';
import {
  Alert,
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import authApi from '../../api/authApi';
import {FORGET_PASS, REGISTER_SCREEN} from '../../router/ScreenName';
import {io} from 'socket.io-client';

import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import {setToken} from '../../helper/auth';
import {loggedAction} from '../../redux/actions/authAction';
import {MAIN_TAB} from './../../router/ScreenName';
import {sendMessenger} from '../../redux/actions/messAction';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const authMess = useSelector(state => state.authMess.messages);

  const [modalVisible, setModalVisible] = useState(false);
  const [emailAccount, setEmailAccount] = useState('prolatui@gmail.com');
  const [passWordAccount, setPasswordAccount] = useState('123');
  const [fcmTokenFireBase, setFcmTokenFireBase] = useState();

  const registerAppWithFCM = async () => {
    await messaging().registerDeviceForRemoteMessages();

    // Lấy token FCM cho thiết bị hiện tại
    const fcmToken = await messaging().getToken();
    // console.log('FCM Token:', fcmToken);
    setFcmTokenFireBase(fcmToken);
  };

  let socketClient = io(`http://192.168.100.64:9999/`);
  socketClient.on('connect', () => {
    console.log('connected to server');
  });
  socketClient.on('checkLogin', data => {
    console.log('data socket', data);
  });
  socketClient.on('mgs', async(data) => {
    const data2 = await data;
    console.log('dataa', data2);
    let arr = []
    arr.push(data2);
    console.log('authMessss', authMess);
    const newMessages = [...authMess, ...arr];
    dispatch(sendMessenger(newMessages));
  });


  const data = {
    emailAccount: emailAccount,
    table: 'user',
  };

  const emitLogin = socketClient => {
    socketClient.emit('Login', data);
  };

  const Login = async () => {
    try {
      if (emailAccount == '' || passWordAccount == '') {
        setModalVisible(true);
      }
      const res = await authApi.Login(emailAccount, passWordAccount);
      // console.log('resssssssssssssssssssssssssssss',res.status);
      if (res.status != 200) {
        setModalVisible(true);
      } else {
        AsyncStorage.setItem('checkLogin', 'true');
        emitLogin(socketClient);
        const checkLogin = await AsyncStorage.getItem('checkLogin');
        dispatch(loggedAction(res.data));

        // console.log('fcm token',fcmTokenFireBase);
        navigation.navigate(MAIN_TAB);
        await setToken(res.data.token);
        await authApi.UpdateTokenFCM(fcmTokenFireBase);
      }
    } catch (e) {
      console.log('login error: ', e);
      setModalVisible(true);
    }
  };
  return (
    <ScrollView>
      <View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 20,
          }}>
          <Image
            source={require('../../assets/image/phonenumber.png')}
            style={styles.hinh}></Image>
        </View>

        <View style={{width: '100%', paddingHorizontal: 15}}>
          <Text style={{fontSize: 20, color: 'black'}}>Đăng nhập</Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 20,
              borderRadius: 5,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập Email"
            onChangeText={setEmailAccount}
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              borderRadius: 10,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            secureTextEntry
            onChangeText={setPasswordAccount}
            placeholder="Nhập mật khẩu"
          />
          <View style={{width: '100%', alignItems: 'flex-end', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(FORGET_PASS);
              }}>
              <Text>Quên mật khẩu?</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#52B4FF',
              height: 45,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 8,
              marginTop: 10,
            }}
            onPress={() => Login()}>
            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              marginTop: 10,
              flexDirection: 'row',
              marginLeft: '20%',
            }}>
            <Text>Người dùng mới? </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(REGISTER_SCREEN);
              }}>
              <Text style={{color: '#52B4FF'}}> Tạo tài khoản</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              style={{width: 60, height: 60}}
              source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>
              Chua nhap dung tài khoản hoặc mật khẩu!
            </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  modalView: {
    margin: 30,
    marginTop: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#52B4FF',
  },
  buttonClose: {
    backgroundColor: '#52B4FF',
    width: 200,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  hinh: {
    marginTop: 20,
    marginLeft: '5%',
    width: '100%',
    height: 350,
  },
});
