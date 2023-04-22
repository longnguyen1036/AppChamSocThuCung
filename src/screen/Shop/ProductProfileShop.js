import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import Block from '../../components/Block'
import { useRoute, useNavigation } from '@react-navigation/native'
import productApi from '../../api/productApi'
import { PRODUCTS_DETAIL_SCREEN } from '../../router/ScreenName'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import formatMoney from '../../components/FormatMoney'


const ProductProfileShop = () => {
  const navigation = useNavigation()
  const router = useRoute()
  const {_id} = router.params
  const [listProduct, setListProduct] = useState([])
  
  const getAllProduct = async () => {
      const res = await productApi.getAllProductStore(_id)
      // console.log('res', res.data.data.idpetStore)
      setListProduct(res.data.data.idProductStore)
  }

  useEffect(() => {
    getAllProduct()
  },[])

  const renderItem = (item) => {
    // console.log('renderItem', item.item)
    return(
      <TouchableOpacity 
      onPress={() => navigation.navigate(PRODUCTS_DETAIL_SCREEN,{
        _id: item.item._id
      })}>
          <View
        style={{
          backgroundColor: '#E6EAED',
          width: 165,
          height: 205,
          borderRadius: 8,
          paddingHorizontal: 8,
          marginRight: '5%',
          marginTop: '2%',
          marginLeft: '5%',
        }}>
        <Block alignCenter marginTop={'5%'}>
          <Image
            style={{width: 100, height: 110}}
            source={{uri: item.item.imgProduct}}></Image>
        </Block>
        <Block
          marginLeft={'1%'}
          marginTop={'3%'}
          width={150}
          height={80}
          backgroundColor={'white'}
          radius={8}>
          <Block marginLeft={'5%'}>
            <Text  style={{color: 'black',fontWeight: '700', width: 110, height: 38, marginTop: '5%'}}>
              Tên: {item.item.nameProduct}
            </Text>
            <Block
              marginTop={'4%'}
              row
              justifySpaceBetween
              paddingHorizontal={5}>
              <Text style={{width: 90, height: 18}}>
               {formatMoney(item.item.priceProduct)}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#E6EAED',
                  borderRadius: 5,
                  width: 25,
                  height: 25,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesome5
                  style={{}}
                  color={'black'}
                  name="chevron-right"
                  size={18}
                />
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
      </View>
      </TouchableOpacity>
    )
  }
  return (
    <Block backgroundColor={'#dcdcdc'} flex={1}>
   

      <FlatList 
        data={listProduct}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default ProductProfileShop

const styles = StyleSheet.create({})