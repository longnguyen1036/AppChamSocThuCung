import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState, useContext} from 'react';

const Register = () => {
  const [hidden, setHidden] = useState(true);
  const [hidden1, setHidden1] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);


  const hiddenPassWord = () => {
    setHidden(!hidden);
  };
  const hiddenPassWord1 = () => {
    setHidden1(!hidden1);
  };
  return (
    <ScrollView>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 20,}}>
          <Image source={require('../../assets/image/phonenumber.png')}></Image>
        </View>

        <View style={{width: '100%', paddingHorizontal: 15}}>
          <Text style={{fontSize: 20, color: 'black', paddingBottom: 20}}>
            Đăng ký
          </Text>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập tên tài khoản"
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập email"
          />
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập mật khẩu"
            secureTextEntry={hidden}></TextInput>
          <TouchableOpacity onPress={hiddenPassWord}>
            {hidden ? (
              <Image
                style={styles.icon}
                name="eye"
                size={20}
                color={'orange'}
                source={require('../../assets/image/pass.png')}
              />
            ) : (
              <Image
                style={styles.icon}
                name="eye-off"
                size={20}
                color={'orange'}
                source={require('../../assets/image/unpass.png')}
              />
            )}
          </TouchableOpacity>
          <TextInput
            style={{
              width: '100%',
              borderWidth: 1,
              marginVertical: 5,
              borderRadius: 6,
              paddingLeft: 15,
              borderColor: '#DADFE6',
            }}
            placeholder="Nhập lại mật khẩu"
            secureTextEntry={hidden1}></TextInput>
          <TouchableOpacity onPress={hiddenPassWord1}>
            {hidden1 ? (
              <Image
                style={styles.icon}
                name="eye"
                size={20}
                color={'orange'}
                source={require('../../assets/image/pass.png')}
              />
            ) : (
              <Image
                style={styles.icon}
                name="eye-off"
                size={20}
                color={'orange'}
                source={require('../../assets/image/unpass.png')}
              />
            )}
          </TouchableOpacity>

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
            }}>
            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>
              Đăng ký
            </Text>
          </TouchableOpacity>
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
            <Text style={styles.modalText}> Bạn chưa nhập đầy đủ thông tin!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  icon: {
    width: 18,
    height: 12,
    position: 'absolute',
    top: -35,
    right: 15,
  },
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
})