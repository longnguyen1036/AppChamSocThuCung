import { StyleSheet, View, FlatList ,TouchableOpacity, Image} from 'react-native'
import React,{useState, useEffect} from 'react'
import Block from '../../components/Block'
import Text from '../../components/Text'
import { useRoute , useNavigation} from '@react-navigation/native'
import productApi from '../../api/productApi'
import { SERVICES_DETAIL_SCREEN } from '../../router/ScreenName'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import formatMoney from '../../components/FormatMoney'



const ServiceProfileShop = () => {
  const navigation = useNavigation()
  const router = useRoute()
  const {_id} = router.params
  const [listProduct, setListProduct] = useState([])
  
  const getAllProduct = async () => {
      const res = await productApi.getAllProductStore(_id)
      // console.log('res', res.data.data.idpetStore)
      setListProduct(res.data.data.idServiceStore)
  }

  useEffect(() => {
    getAllProduct()
  },[])

  const renderItem = (item) => {
    console.log('renderItem', item.item)
    return(
      <TouchableOpacity 
      onPress={() => navigation.navigate(SERVICES_DETAIL_SCREEN,{
        _id: item.item._id
      })}>
           <Block
            marginLeft={'4%'}
            backgroundColor={'white'}
            width={'92%'}
            // height={130}
            row
            marginTop={10} 
            radius={10}
            // alignCenter
            padding={12}
            >
            <Image style={styles.ilist} source={{uri: item.item.imgService}}></Image>
            
              <Block marginLeft={'2%'} width={'74%'} >
                <Text numberOfLines={1} color={'#18A2E1'} size={18}>
                 Dịch vụ: {item.item.nameService}
                </Text>
                <Text  marginTop={4} size={16}>Giá: {formatMoney(item.item.priceService)}</Text>
                <Text numberOfLines={2} marginTop={4} size={14}>Mô tả: {item.item.descriptionService}</Text>
              </Block>
             
            </Block>
      </TouchableOpacity>
    )
  }
  return (
    <Block backgroundColor={'#dcdcdc'} flex={1} paddingHorizontal={'1%'}>

      <FlatList 
        data={listProduct}
        renderItem={renderItem}
      />
    </Block>
  )
}

export default ServiceProfileShop

const styles = StyleSheet.create({
  ilist: {
    width: 90,
    height: 100,
    borderRadius: 6,
    
  },
})