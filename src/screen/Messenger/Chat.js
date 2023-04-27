import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  TouchableOpacity,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Block from '../../components/Block';
import authApi from '../../api/authApi';
import {useRoute} from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessenger } from '../../redux/actions/messAction';
import { io } from 'socket.io-client';

const Chat = ({navigation}) => {
  const [message, setMessage] = useState([]);
  const dispatch = useDispatch();
  const [inputmess, SetInputMess] = useState('');
  const [arrMessage, SetArrMessage] = useState([]);
  const [newArr, setNewArr] = useState([]);
  const router = useRoute();
  const authMess = useSelector(state =>  state.authMess.messages);

  const {data, id, idSocketStore} = router.params;


  const sendMessage = () => {
    try {
      const data = {
        id: id,
        socketId: idSocketStore,
        mess: inputmess,
        table: 'user',
      };
      console.log(idSocketStore,'------------------------->')
      const socket = io(`http://192.168.1.8:9999/`);
      // socket.on('mgs', msg => {
      //   console.log('mafsdfdssd', msg);
      // });
      socket.on('checkerror', error => {
        console.log('error socket', error);
      });
      socket.emit('sendmess', data);
      const format = '1:'+inputmess
      let arr = []
      arr.push(format);
      const newMessages = [...arr];
      dispatch(sendMessenger(newMessages));
      SetInputMess('')
    } catch (error) {
      console.log(error);
    }
  };

  const CutArray = () => {
    if(authMess == 1){
      // const cutarray = data.map(item => {
      //   const [key, value] = item.split(':');
      //   return {[key]: value};
      // });
      // console.log('cutarray', cutarray);
      // SetArrMessage(cutarray)
      console.log('61')
    }
    else{
      let arr = data.concat(authMess);
      setNewArr(arr);
      const cutarray = arr.map(item => {
        const [key, value] = item.split(':');
        return {[key]: value};
      });
      // console.log('22222', cutarray);
      SetArrMessage(cutarray);
    }

    
  };

  useEffect(() => {
    CutArray();
  }, [authMess]);

  const renderItem = ({item, index}) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    return (
      <View style={styles.messageContainer}>
        <View
          style={[
            styles.messageBubble,
            {
              backgroundColor: key === '1' ? 'pink' : 'cyan',
              marginLeft: key === '1' ? 'auto' : 0,
              marginRight: key === '2' ? 'auto' : 0,
            },
          ]}>
          <Text style={styles.messageText}>{value}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
        <TouchableOpacity
          style={{width: '40%'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        </TouchableOpacity>
        <Block width={'50%'}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
            Username
          </Text>
        </Block>
      </Block>
      <FlatList
        data={arrMessage}
        renderItem={renderItem}
        keyExtractor={item => item.index}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={inputmess}
          style={styles.input}
          placeholder="Type your message here"
          onChangeText={text => SetInputMess(text)}
        />
        <TouchableOpacity
          style={styles.sendButton}
          onPress={() => sendMessage()}>
          <FontAwesome name={'send'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  avatar: {
    backgroundColor: 'green',
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 10,
  },
  messageBubble: {
    width: 'auto',
    height: '100%',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    maxWidth: '100%',
    marginEnd: 'auto',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  sendButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 0.4,
    borderRadius: 12
  },
});
