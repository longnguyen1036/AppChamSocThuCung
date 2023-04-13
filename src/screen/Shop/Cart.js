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

const Cart = ({navigation}) => {
  const DATA = [
    {
      id: 1,
      name: 'BEAGLE CƯNG CƯNG',
      category: 'Thú cưng',
      price: 1800000,
      images: require('./../../assets/image/dog.png'),
    },
    {
      id: 2,
      name: 'BEAGLE CƯNG CƯNG',
      category: 'Thú cưng',
      price: 2000000,
      images: require('./../../assets/image/dog.png'),
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Block backgroundColor={'white'} border={0.5} height={120}>
        
        <Block marginTop={10} row>
          <Image style={styles.ilist} source={item.images}></Image>
          <Block paddingLeft={10}>
            <Text width={'90%'}>Tên sản phẩmaaaaaaaaaaaaaaaaaaaaaa</Text>
            <Text>Loại sản phẩm</Text>
            <Text color={'skyblue'} size={15}>
              Giá sản phẩm
            </Text>
            <Block border={0.5} row width={90} height={30} justifySpaceBetween>
              <TouchableOpacity style={styles.ip}>
                <Text size={15}>-</Text>
              </TouchableOpacity>
              <Text size={15}>1</Text>
              <TouchableOpacity style={styles.ip2}>
                <Text size={15}>+</Text>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };
  return (
    <Block backgroundColor={'#DADADA'} flex={1}>

      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Block width={'40%'}>
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        </Block>
        </TouchableOpacity>
        <Block width={'50%'} marginLeft={'40%'}>
          <Text size={20} color={'black'} bold>
            Giỏ hàng
          </Text>
        </Block>
      </Block>

      <Block>
      <Block backgroundColor={'white'} paddingLeft={15} border={1}>
          <Text>Tên cửa hàng</Text>
          <Text>Địa chỉ</Text>
        </Block>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
        <TouchableOpacity>
        <Block backgroundColor={'white'} row={1} border={0.5} height={70}>
            <Block backgroundColor={'#18A2E1'} width={'35%'} alignCenter paddingTop={20} >
                <Text  size={15}  color={'white'}>Mua hàng</Text>
            </Block>
            <Block paddingLeft={90} paddingTop={15} alignCenter>
                <Text>Thành tiền</Text>
                <Text size={15} color={'#18A2E1'}>90000000đ</Text>
            </Block>
        </Block>

        </TouchableOpacity>
      </Block>

    </Block>
  );
};

export default Cart;

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
