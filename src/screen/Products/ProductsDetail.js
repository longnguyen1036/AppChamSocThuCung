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

useEffect(() => {
  getDetailProducts()
},[])

  return (
    <View style={{backgroundColor: '#dcdcdc', height: '100%'}}>
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

          <TouchableOpacity>
            <FontAwesome5 name="heart" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={{uri: listProduct?.imgProduct}}
            style={{width: 200, height: 200, borderRadius: 8}}></Image>
        </View>

       

        <View>
          <View style={{marginTop: '3%'}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              {listProduct?.nameProduct}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{formatMoney(listProduct?.priceProduct)}</Text>
            <Text style={{fontSize: 17, color: 'black', fontWeight: '600'}}>
              {listProduct?.descriptionProduct}
            </Text>
          </View>
          <View style={{flexDirection: 'row', width: '73%', marginTop: '3%'}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 8, borderRadius: 8}}>
              <Text style={{fontSize: 10,}}>
                Danh mục
              </Text>
              <Text style={{fontSize: 12, color: 'black', fontWeight: '700'}}>{listProduct?.typeProduct}</Text>
            </TouchableOpacity>

        
          </View>
        </View>

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
            borderWidth: 1
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
          onPress={() => navigation.navigate(CART_SCREEN)}
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
  );
};

export default ProductsDetail;

const styles = StyleSheet.create({});
