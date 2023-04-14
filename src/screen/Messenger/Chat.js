import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Chat = ({navigation}) => {
  return (
    <Block flex={1} backgroundColor={'white'}>
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
        <TouchableOpacity
          style={{width: '40%'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        </TouchableOpacity>
        <Block width={'50%'}>
          <Text size={20} color={'black'} bold>
            Username
          </Text>
        </Block>
      </Block>

      <Block paddingHorizontal={10} row padding={10} marginTop={'180%'}>
        <Block
          row
          justifyCenter
          alignCenter
          backgroundColor={'#F2F3F2'}
          height={40}
          borderRadius={15}
          width={'90%'}>
          <TextInput
            placeholder="Nhập tin nhắn"
            style={{flex: 1, paddingLeft: 10}}
            underlineColorAndroid="transparent"></TextInput>
        </Block>
        <TouchableOpacity style={{marginLeft: '3%', marginTop: 5}}>
          <Ionicons name="send" size={30} />
          </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Chat;
const styles = StyleSheet.create({
  seachImage: {
    padding: 10,
    marginLeft: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ilist: {
    width: 100,
    height: 110,
    marginLeft: '18%',
  },
  nut: {
    width: 32,
    height: 32,
    backgroundColor: '#F2F3F2',
    position: 'absolute',
    right: '5%',
    bottom: '8%',
    alignItems: 'center',
    borderRadius: 4,
    paddingTop: '15%',
  },
});
