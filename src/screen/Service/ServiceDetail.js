import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Block from '../../components/Block';
import productApi from '../../api/productApi';
import { useRoute } from '@react-navigation/native';
import formatMoney from '../../components/FormatMoney';
import { PROFILE_SHOP_SCREEN, SERVICE_PROFILE_SHOP_SCREEN } from '../../router/ScreenName';
import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';
import { useSelector } from 'react-redux';


const ServiceDetail = ({navigation}) => {
  const router = useRoute()
  const {_id} = router.params
  const [date, setDate] = useState(new Date());
  const [modalVisible2, setModalVisible2] = useState(false);
  const [time, setTime] = useState();
  const [listProduct, setListProduct] = useState([]);
  const [shop , setShop] = useState([]);
  const [address , setAddress] = useState();
  const authState = useSelector(state => state.authState.userInfo)

  console.log('authState', authState);

  console.log('_id', _id);

  const getDetailProducts = async () => {
      const res = await productApi.getDetailProduct(_id, 'serviceStore')
      setListProduct(res.data.data.dataProduct)
      setShop(res.data.data)
      console.log('rewreerwe', res.data.data);
      setAddress(res.data.data.adress[0])
  }

  const subMit = async () => {
    try {
      if(time == null){
        Notifier.showNotification({
          title: 'Thông báo',
          description: 'Ban chưa chọn giờ',
          Component: NotifierComponents.Alert,
          componentProps: {
            alertType: 'error',
          },
        });
      }else{
        const res = await productApi.BookingService(authState.id, _id, date.toLocaleDateString(), time, listProduct?.nameService, shop.name, address);
        console.log('ress', res.data);
        if(res.status === 200){
          Notifier.showNotification({
            title: 'Thông báo',
            description: 'đặt lịch thành công',
            Component: NotifierComponents.Alert,
            componentProps: {
              alertType: 'success',
            },
          });
          navigation.goBack();
        }else{
          Notifier.showNotification({
            title: 'Thông báo',
            description: 'đặt lịch thất bại',
            Component: NotifierComponents.Alert,
            componentProps: {
              alertType: 'error',
            },
          });
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  }


  useEffect(() => {
    getDetailProducts();
  },[])

  const addFavorite = async () => {
    
    const res = await productApi.addFavorite('favoriteServiceId', _id)
    Notifier.showNotification({
      title: 'Thông báo',
      description: 'Đã thêm vào yêu thích',
      Component: NotifierComponents.Alert,
      componentProps: {
        alertType: 'success',
      },
    });
    return res
    
  }

 

  const renderItem = ({item}) => {
    // console.log('renderItem', item)
    return (
      <TouchableOpacity onPress={() => {setTime(item.time), setModalVisible2(false)}} disabled={!item.status}>
      <Block
        alignCenter
        margin={5}
        width={60}
        height={60}
        paddingVertical={15}
        backgroundColor={'#ECF2F8'}>
        <Text
          style={{
            fontSize: 18,
            color: item.status == false ? 'grey' : 'black',
          }}>
          {item.time}
        </Text>
      </Block>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{backgroundColor: '#F2F3F2', height: '100%', width: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
            paddingVertical: '3%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={30} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> addFavorite()}>
            <FontAwesome5 name="heart" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View style={{width: '100%', padding: 12}}>
          <Image
            source={{uri: listProduct?.imgService}}
            style={{width:  '100%', height: 300, borderRadius: 8,}}></Image>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontSize: 24, fontWeight: '600', color:'black'}}>{listProduct?.nameService}</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(PROFILE_SHOP_SCREEN,{
            _id: shop.id_store,
            name: shop.name,
            adress: address
          })}
          style={{
            marginTop: '3%',
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 8,
            borderRadius: 8,
            borderWidth: 0.4,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#18A2E1',
                padding: 5,
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/image/iconimg.png')}></Image>
            </View>

            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                {shop?.name}
              </Text>
              <Text numberOfLines={1} style={{width: '74%'}} >{address}</Text>
            </View>
          </View>

        </TouchableOpacity>

        <View style={{width: '75%', flexDirection: 'row', marginTop: '3%'}}>
          <View>
            {/* <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              150000đ
            </Text> */}
          </View>
          <View style={{marginLeft: '3%'}}>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#F80202'}}>
              {formatMoney(listProduct?.priceService)}
            </Text>
          </View>
        </View>

        <View
          style={{width: '75%', alignContent: 'flex-start', marginTop: '2%'}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Thời gian</Text>
        </View>

        <View
          style={{
            width: '75%',
            marginTop: '2%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Block
            alignCenter
            width={100}
            height={40}
            backgroundColor={'white'}
            paddingTop={'2%'}
            radius={5}>
            <Text style={{fontSize: 18, color: 'black'}}>{date.toLocaleDateString()}</Text>
          </Block>

          <TouchableOpacity style={{marginLeft: '30%'}} onPress={()=> setModalVisible2()}>
            <Block
              alignCenter
              width={100}
              height={40}
              backgroundColor={'white'}
              paddingTop={'7%'}
              radius={5}>
              <Text style={{fontSize: 18, color: 'black'}}>{time ? time : 'Chọn lịch'}</Text>
            </Block>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
        onPress={() => subMit()}
          style={{
            backgroundColor: '#18A2E1',
            borderRadius: 8,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2%',
            marginTop: '10%',
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Đặt lịch
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.modalView}>
          <FlatList numColumns={4} data={listProduct?.timeService} renderItem={renderItem} />

          <Block row margin={10}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose2]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Text style={styles.textStyle}>Hủy</Text>
            </TouchableOpacity>
          </Block>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
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
    width: 100,
  },
  buttonClose2: {
    marginLeft: '10%',
    backgroundColor: 'grey',
    width: 100,
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
  hinh: {
    marginTop: 20,
    marginLeft: '5%',
    width: '100%',
    height: 350,
  },
});
