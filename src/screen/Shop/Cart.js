import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';

const Cart = ({navigation}) => {
  const [listCart, setListCart] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCart = async () => {
    setLoading(true);
    try {
      const res = await productApi.getCartProduct();
      setListCart(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log('error loading cart', error);
      setLoading(false);
    }
  };

  const buyCart = async item => {
    try {
      const ProductId = [];
      const PetId = [];
      for (let i = 0; i < item.ProductId.length; i++) {
        ProductId.push({
          product: item.ProductId[i]._id,
          quantity: item.ProductId[i].quantity,
        });
      }
      for (let i = 0; i < item.PetId.length; i++) {
        PetId.push({
          product: item.PetId[i]._id,
          quantity: item.PetId[i].quantity,
        });
      }
      Notifier.showNotification({
        title: 'Thông báo',
        description: 'Thanh toán thành công',
        Component: NotifierComponents.Alert,
        componentProps: {
          alertType: 'success',
        },
      });
      const res = await productApi.BuyCart(item._id, ProductId, PetId, []);
      navigation.goBack();
    } catch (error) {
      console.log('error buy cart', error);
    }
  };

  useEffect(() => {
    getCart();
  }, []);
  const renderItem = ({item}) => {
    // console.log('item', item);
    const sumPet = item.PetId.reduce(
      (a, b) => a + Number(b.product.pricePet) * Number(b.quantity),
      0,
    );
    const sumProduct = item.ProductId.reduce(
      (a, b) => a + Number(b.product.priceProduct) * Number(b.quantity),
      0,
    );
    const totalSum = Number(sumPet) + Number(sumProduct);
    // console.log('sum', sumProduct, totalSum);

    return (
      <Block backgroundColor={'#F2F3F2'} width={'100%'} marginBottom={10}>
        <Block backgroundColor={'#18A2E1'} paddingLeft={15}>
          <Text color={'white'} bold>
            Cửa hàng: {item.idAccountStore.nameStore}
          </Text>
          <Text color={'white'}>
            Địa chỉ: {item.idAccountStore.addressStore}
          </Text>
        </Block>
        {item.PetId.map((item, index) => (
          <Block marginTop={4} row backgroundColor={'white'}>
            <Image
              style={styles.ilist}
              source={{uri: item.product.imgPet}}></Image>
            <Block paddingLeft={10}>
              <Text width={'90%'}>{item.product.namePet}</Text>
              <Text>{item.product.descriptionPet}</Text>
              <Text color={'skyblue'} size={15}>
                {formatMoney(item.product.pricePet)}
              </Text>
              <Block>
                <Text size={15}>Số lượng: x{item.quantity}</Text>
              </Block>
            </Block>
          </Block>
        ))}
        {item.ProductId.map(item => (
          <Block marginTop={4} row backgroundColor={'white'}>
            <Image
              style={styles.ilist}
              source={{uri: item.product.imgProduct}}></Image>
            <Block paddingLeft={10}>
              <Text width={'90%'}>{item.product.nameProduct}</Text>
              <Text>{item.product.descriptionProduct}</Text>
              <Text color={'skyblue'} size={15}>
                {formatMoney(item.product.priceProduct)}
              </Text>
              <Block>
                <Text size={15}>Số lượng: x{item.quantity}</Text>
              </Block>
            </Block>
          </Block>
        ))}
        <Block marginTop={4} backgroundColor={'white'}>
          <TouchableOpacity
            style={{borderWidth: 0.4}}
            onPress={() => buyCart(item)}>
            <Block backgroundColor={'white'} row={1} height={70}>
              <Block
                backgroundColor={'#18A2E1'}
                width={'35%'}
                alignCenter
                paddingTop={20}>
                <Text size={15} color={'white'}>
                  Mua hàng
                </Text>
              </Block>
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
    <Block backgroundColor={'#F2F3F2'} flex={1}>
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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

      {loading ? (
        <ActivityIndicator size={'large'} color={'red'} />
      ) : (
        <Block flex={1}>
          <FlatList data={listCart} renderItem={renderItem} />
        </Block>
      )}
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
