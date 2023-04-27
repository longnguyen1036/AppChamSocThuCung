import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import productApi from '../../api/productApi';

const HistoryService = ({navigation}) => {
  const [data, setData] = useState();
 

  const getService = async () => {
    try {
      const res = await productApi.getHistoryService();
      setData(res.data.data);
    } catch (error) {
      console.log('error: ' + error)
    }
  }

  useEffect(() => {
    getService();
  },[])

  const renderItem = ({item}) => {
    console.log('item', item);
    return (
      <Block
      marginTop={5}
        backgroundColor={'white'}
        border={0.5}
        height={160}
        row
        paddingTop={5}>
        <Block backgroundColor={'white'} paddingLeft={15}>
          <Text>{item.date}</Text>
          <Text>{item.time}</Text>
        </Block>

        <Block row marginLeft={10}>
          <Block paddingLeft={10}>
            <Text>{item.nameService}</Text>
            <Text>{item.nameStore}</Text>
            <Text color={'#7C7C7C'}>{item.address}</Text>
          
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block backgroundColor={'#DADADA'} flex={1}>
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
        <Block width={'40%'}>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
            </TouchableOpacity>
        </Block>
        <Block width={'50%'}>
          <Text size={20} color={'black'} bold>
            Lịch sử đặt lịch
          </Text>
        </Block>
      </Block>

      <Block>
        <FlatList  data={data} renderItem={renderItem} />
      </Block>
    </Block>
  );
};

export default HistoryService;

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
    width: 80,
    height: 90,
    backgroundColor: 'blue',
    marginLeft: '2%',
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
  ip: {
    borderRightWidth: 0.5,
    width: 29,
    height: 29,
    alignItems: 'center',
  },
  ip2: {
    borderLeftWidth: 0.5,
    width: 29,
    height: 29,
    alignItems: 'center',
  },
});
