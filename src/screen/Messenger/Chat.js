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
import {io} from 'socket.io-client';

const Chat = ({navigation}) => {
  const [message, setMessage] = useState([]);
  const [inputmess, SetInputMess] = useState('');
  const router = useRoute();
  
  const {data, id, idSocketStore} = router.params;

  const sendMessage = () => {
    try {
      SetInputMess('')
      const data = {
        id: id,
        socketId: idSocketStore,
        mess: inputmess,
        table: 'user',
      };
      const socket = io(`http://192.168.1.6:9999/`);
      socket.on('mgs', msg => {
        console.log('mafsdfdssd', msg);
      });
      socket.on('checkerror', error => {
        console.log('error socket', error);
      });
      const res = socket.emit('sendmess', data);
      console.log('ress', res);
    } catch (error) {
      console.log(error);
    }
  };

  const CutArray = () => {
   const cutarray = data.map(item => {
      const [key, value] = item.split(':');
      return {[key]: value};
    });
    setMessage(cutarray);

    const socket = io(`http://192.168.1.6:9999/`);
    socket.on('mgs', (data) => {
      console.log('dataaaaaaaaaaaaaaaaaaaaa', data);
      // Cập nhật mảng tin nhắn với tin nhắn mới nhất
      setMessage(prevMessages => [...prevMessages, { [data.key]: data.value }]);
    });
  };

  const socket = io(`http://192.168.1.6:9999/`);
  socket.on('mgs', msg => {
    console.log('toi la toan', msg);
  });

  useEffect(() => {
    CutArray();
  }, []);


  useEffect(() => {
    console.log('i73');
    // Tạo một đối tượng socket mới và thiết lập kết nối
    const socket = io(`http://192.168.1.6:9999/`);
    // Lắng nghe sự kiện 'message' từ máy chủ WebSocket
    socket.on('mgs', (data) => {
      console.log('data', data);
      setMessage2(data);
    });

    // Lệnh return trong useEffect được sử dụng để ngăn chặn xoá lệnh lắng nghe khi component bị xoá khỏi màn hình
    return () => {
      socket.disconnect();
      socket.off();
    };
  });
const [message2, setMessage2] = useState('');
  



  const renderItem = ({item}) => {
    const key = Object.keys(item)[0];
    const value = item[key];
    
    return (
      <View style={styles.messageContainer}>
        <View style={[styles.messageBubble, {backgroundColor: key === '1' ? 'pink' : 'cyan' , marginLeft: key === '1' ? 'auto' : 0 , marginRight:key === '2' ? 'auto' : 0  }]}>
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
        data={message}
        renderItem={renderItem}
        keyExtractor={item => item.id}
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
    borderWidth: 1,
  },
});
