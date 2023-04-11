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
import {PROFILE_SHOP_SCREEN} from '../../router/ScreenName';
import { useRoute } from '@react-navigation/native';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';
const PetDetail = ({navigation}) => {
  const router = useRoute()
  const {_id} = router.params


  const [listProduct, setListProduct] = useState([])



  const getDetailProducts = async () => {
      const res = await productApi.getDetailProduct(_id, 'petStore')
      setListProduct(res.data.data.dataProduct)
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
            source={{uri: listProduct?.imgPet}}
            style={{width: 200, height: 200, borderRadius: 8}}></Image>
        </View>

      

        <View>
          <View style={{marginTop: '3%', width: '73%'}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              {listProduct?.namePet}
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{formatMoney(listProduct?.pricePet)}</Text>
       
          </View>
          <View style={{flexDirection: 'row', width: '73%', marginTop: '3%'}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 8, borderRadius: 8}}>
              <Text style={{fontSize: 10,}}>
                {listProduct?.genderPet}
              </Text>
              <Text style={{textAlign: 'center',fontSize: 12, color: 'black', fontWeight: '700'}}>Cái</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginLeft: '5%',
                padding: 8,
                borderRadius: 8,
                width: 55,
                height: 55,
              }}>
              <Text style={{fontSize: 10,}}>
                Tuoi
              </Text>
              <Text style={{textAlign: 'center',fontSize: 12, color: 'black', fontWeight: '700'}}>{listProduct?.agePet}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginLeft: '5%',
                padding: 8,
                borderRadius: 8,
                width: 55,
                height: 55,
              }}>
              <Text style={{fontSize: 10,}} >
                Giong
              </Text>
              <Text style={{textAlign: 'center', fontSize: 12, color: 'black', fontWeight: '700'}}>{listProduct?.typePet}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(PROFILE_SHOP_SCREEN)}
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 8,
            borderRadius: 8,
            borderWidth: 1,
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
                matpetfamily
              </Text>
              <Text>Store</Text>
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

export default PetDetail;

const styles = StyleSheet.create({});
