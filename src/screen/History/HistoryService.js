import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import React from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HistoryService = () => {
  const DATA = [
    {
      id: 1,
      name: 'BEAGLE CƯNG CƯNG',
      category: 'Thú cưng',
      price: 1800000,
      images: require('./../../assets/image/dog.png'),
      tt: 'Chưa hoàn thành',
      btn: 'Hủy dịch vụ',
    },
    {
      id: 2,
      name: 'BEAGLE CƯNG CƯNG',
      category: 'Thú cưng',
      price: 2000000,
      images: require('./../../assets/image/dog.png'),
      tt: 'Hoàn thành',
      btn: 'Đặt lại',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Block
      marginTop={5}
        backgroundColor={'white'}
        border={0.5}
        height={160}
        row
        paddingTop={5}>
        <Block backgroundColor={'white'} paddingLeft={15}>
          <Text>03-03-2002</Text>
          <Text>08:30</Text>
        </Block>

        <Block row marginLeft={10}>
          <Block paddingLeft={10}>
            <Block width={120} border={0.1} radius={5} borderColor={'#18A2E1'}>
              <Text size={15} color={'skyblue'} center>
                {item.tt}
              </Text>
            </Block>
            <Text>Tỉa lông chó</Text>
            <Text size={15} color={'skyblue'}>
              100000đ
            </Text>
            <Text>Toandodatshop</Text>
            <Text color={'#7C7C7C'}>147 Nguyễn Sỹ Sách Phường 15 Tân Bình</Text>
            <Block
              marginTop={10}
              backgroundColor={'#D9D9D9'}
              width={'90%'}
              height={'20%'}
              radius={10}
              paddingTop={4}
              alignCenter
              marginRight={150}>
              <Text size={15} color={'black'}>
                {item.btn}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block backgroundColor={'#DADADA'} flex={1}>
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
        <Block width={'40%'}>
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        </Block>

        <Block width={'50%'}>
          <Text size={20} color={'black'} bold>
            Lịch sử đặt lịch
          </Text>
        </Block>
      </Block>

      <Block>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
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
