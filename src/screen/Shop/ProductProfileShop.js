import { StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React,{useState, useEffect} from 'react'
import Block from '../../components/Block'
import Text from '../../components/Text'
import { useRoute, useNavigation } from '@react-navigation/native'
import productApi from '../../api/productApi'
import { PRODUCTS_DETAIL_SCREEN } from '../../router/ScreenName'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import formatMoney from '../../components/FormatMoney'
import { FlatGrid } from 'react-native-super-grid'


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
           <Block
          marginLeft={'8%'}
          backgroundColor={'white'}
          width={160}
         marginTop={12}
          radius={10}
          >
          <Image style={styles.ilist} source={{uri: item.item.imgProduct}}></Image>
          <Block
            paddingLeft={'5%'}
            padding={3}
            marginTop={8}
            height={70}
      
            >
            <Block width={140} paddingTop={5}>
              <Block width={'100%'} height={20} > 
              <Text bold>{item.item.nameProduct}</Text>
              </Block>
              <Block width={100} marginTop={10}>
                <Text color={'#18A2E1'} bold size={16}>
                  {formatMoney(item.item.priceProduct)}
                </Text>
              </Block>
            </Block>
            
          </Block>
        </Block>
      </TouchableOpacity>
    )
  }
  return (
    <Block backgroundColor={'#dcdcdc'} flex={1}>
   

      <FlatGrid 
        data={listProduct}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default ProductProfileShop

const styles = StyleSheet.create({
  ilist: {
    width: '100%',
      height: 150,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },
})