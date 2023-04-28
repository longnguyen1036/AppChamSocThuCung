import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { CART_SCREEN, PROFILE_SHOP_SCREEN } from '../../router/ScreenName';
import { useRoute } from '@react-navigation/native';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
import {Notifier, Easing, NotifierComponents} from 'react-native-notifier';

const ProductsDetail = ({navigation}) => {
  const router = useRoute()
  const {_id} = router.params


  const [listProduct, setListProduct] = useState([])
  const [shop , setShop] = useState([])
  const [address , setAddress] = useState()

  const getDetailProducts = async () => {
    const res = await productApi.getDetailProduct(_id, 'productStore')
    setListProduct(res.data.data.dataProduct)
    setShop(res.data.data)
    setAddress(res.data.data.adress[0])
}

const addCart = async (id, product, quantity) => {
  const ProductId = {
    product  : product,
    quantity : quantity
  }
  
  const res = await productApi.addCartProduct(id, ProductId, "productStore")
  Notifier.showNotification({
    title: 'Thông báo',
    description: 'Đã thêm vào giỏ hàng',
    Component: NotifierComponents.Alert,
    componentProps: {
      alertType: 'success',
    },
  });
  return res
}

useEffect(() => {
  getDetailProducts()
},[])

const addFavorite = async () => {
    
  const res = await productApi.addFavorite('favoriteProductId', _id)
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

  return (
    <View style={{backgroundColor: '#dcdcdc', height: '100%'}}>
      <View>
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
            source={{uri: listProduct?.imgProduct}}
            style={{width:  '100%', height: 300, borderRadius: 8,}}></Image>
        </View>

       

        <View>
        <View style={{marginTop: '3%', width: '73%', paddingLeft: 12}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              {listProduct?.nameProduct}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#18A2E1'}}>{formatMoney(listProduct?.priceProduct)}</Text>
       
          </View>
          
          <View style={{ width: '100%', marginTop: '3%', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 12}}>
            

            <TouchableOpacity
              style={{backgroundColor: 'white', width: 70, height: 70, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
               Phận loại
              </Text>
              <Text style={{textAlign: 'center',fontSize: 12, color: 'black'}}> {listProduct?.typeProduct}</Text>
            </TouchableOpacity>

            <View
              style={{backgroundColor: 'white', width: '76%', height: 70, borderRadius: 5, padding: 5, marginLeft: 12}}>
              <Text style={{fontSize: 15, color: 'black', fontWeight: '700'}}>
               Mô tả:
              </Text>
              <Text style={{ numberOfLines: 2 ,fontSize: 12, color: 'black',}}> {listProduct?.descriptionProduct}</Text>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
        <TouchableOpacity
        onPress={() => navigation.navigate(PROFILE_SHOP_SCREEN,{
          _id: shop.id_store,
          name: shop.name,
          adress: address
        })}
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            width: '80%',
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
              {
               !address ? <Text>shop</Text> : <Text style={{width: '40%'}} numberOfLines={1}>{address}</Text>
              }
              
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#18A2E1',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              height: 40,

            }}>
            <FontAwesome5 name="comments" size={20} color={'white'} />
          </TouchableOpacity>
        </TouchableOpacity>
        

        <TouchableOpacity
          onPress={() => addCart(shop?.id_store, listProduct?._id, 1)}
          style={{
            marginTop: '5%',
            backgroundColor: '#18A2E1',
            padding: '3%',
            borderRadius: 8,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductsDetail;

const styles = StyleSheet.create({});
