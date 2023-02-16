import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useContext} from 'react';
import {REGISTER_SCREEN} from '../../router/ScreenName';

const Login = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20,}}>
          <Image source={require('../../assets/image/phonenumber.png')}></Image>
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
            placeholder="Nhập tên tài khoản"
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
            placeholder="Nhập mật khẩu"
          />
          <View style={{width: '100%', alignItems: 'flex-end', marginTop: 10}}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('FPass');
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
            onPress={() => handleLogin()}>
            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
              Đăng nhập
            </Text>
          </TouchableOpacity>

          <View
            style={{
              width: '100%',
              marginTop: 10,
              flexDirection: 'row',
              marginLeft: '30%',
            }}>
            <Text style={{textAlign: 'center', paddingHorizontal: 5}}>
              <Text>Người dùng mới?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(REGISTER_SCREEN);
                }}>
                <Text style={{color: '#52B4FF'}}> Tạo tài khoản</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image style={{width: 60, height: 60}}  source={require('../../assets/image/warning.png')}></Image>
            <Text style={styles.modalText}>Sai tài khoản hoặc mật khẩu!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Đồng ý</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
    
  );
};

export default Login;

const styles = StyleSheet.create({});
