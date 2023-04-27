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
import formatMoney from '../../components/FormatMoney';

const HistoryBought = ({navigation}) => {
  const [data, setData] = useState([]);
 
  const getList = async () => {
    try {
      const res = await productApi.getListHistory();
      setData(res.data.data)

    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    getList();
  },[])

  const renderItem = ({item}) => {
    const sumPet = item.PetId.reduce((a, b) => a + (Number(b.product.pricePet) * Number(b.quantity)), 0);
    const sumProduct = item.ProductId.reduce((a, b) => a +(Number(b.product.priceProduct) * Number(b.quantity)), 0);
    const totalSum = Number(sumPet) + Number(sumProduct);
  
    return (
      <Block
        backgroundColor={'white'}
        width={'100%'}
        marginBottom={10}
        padding={10}>
        <Block backgroundColor={'white'} paddingLeft={15} >
          <Text>Cửa hàng: {item.idAccountStore.nameStore}</Text>
          <Text>Địa chỉ: {item.idAccountStore.addressStore}</Text>
        </Block>
        {item.PetId.map((item, index) => (
          <Block marginTop={10} row>
            <Image style={styles.ilist} source={{uri: item.product.imgPet}}></Image>
            <Block paddingLeft={10}>
              <Text width={'90%'}>{item.product.namePet}</Text>
              <Text>{item.product.descriptionPet}</Text>
              <Text color={'skyblue'} size={15}>
              {formatMoney(item.product.pricePet)}
              </Text>
              <Block>
               
                <Text size={15}>Số lượng:  x{item.quantity}</Text>
                
              </Block>
            </Block>
          </Block>
        ))}
          {item.ProductId.map(item => (
          <Block marginTop={10} row>
            <Image style={styles.ilist} source={{uri: item.product.imgProduct}}></Image>
            <Block paddingLeft={10}>
              <Text width={'90%'}>{item.product.nameProduct}</Text>
              <Text>{item.product.descriptionProduct}</Text>
              <Text color={'skyblue'} size={15}>
              {formatMoney(item.product.priceProduct)}
              </Text>
              <Block>
               <Text size={15}>Số lượng:  x{item.quantity}</Text>
             </Block>
            </Block>
          </Block>
        ))}
        <Block marginTop={10}>
          <TouchableOpacity onPress={() => buyCart(item)}>
          <Block backgroundColor={'white'} row={1} border={0.5} height={70}>
           
            <Block paddingLeft={90} paddingTop={15} alignCenter>
              <Text>Thành tiền</Text>
              <Text size={15} color={'#18A2E1'}>
              {formatMoney(totalSum)}
              </Text>
            </Block>
          </Block>
        </TouchableOpacity>
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
            Lịch sử mua hàng
          </Text>
        </Block>
      </Block>

      <Block flex={1}>
      
        <FlatList  data={data} renderItem={renderItem} style={{flex: 1}}/>
      </Block>
    </Block>
  );
};

export default HistoryBought;

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
