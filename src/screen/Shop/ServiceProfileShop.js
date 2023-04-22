import { StyleSheet, Text, View, FlatList ,TouchableOpacity, Image} from 'react-native'
import React,{useState, useEffect} from 'react'
import Block from '../../components/Block'
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
           <View
        style={{
          width: '100%',
          backgroundColor: '#E6EAED',
          flexDirection: 'row',
          paddingVertical: 10,
          borderRadius: 8,
          marginTop: '3%',
        }}>
        <Image
          style={{
            width: 100,
            height: 120,
            borderRadius: 8,
            marginLeft: '2%',
            marginRight: '2%',
          }}
          source={{uri: item.item.imgService}}></Image>

        <Block
          radius={4}
          width={'68%'}
          height={120}
          backgroundColor={'white'}
          paddingLeft={'2%'}>
          <Block row justifySpaceBetween width={'95%'} >
            <Block>
              <Text style={{color: 'black', fontSize: 18, fontWeight: '500', width: 190, height: 20}}>
                Tên: {item.item.nameService}
              </Text>
              <Text style={{color: 'black'}}>Giá: {formatMoney(item.item.priceService)}</Text>
              <Text style={{color: 'red'}}>KM: {formatMoney(item.item.priceService*8/10)}</Text>

              <Text>Dành cho: {item.item.typeService}</Text>
            </Block>
            <TouchableOpacity
              style={{
                backgroundColor: '#E6EAED',
                borderRadius: 5,
                width: 35,
                height: 35,
                marginTop: '4%',
                marginRight: '0%',
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
          <Text style ={{width: '99%', marginTop: '2%', color: 'black' }}>
          Mô tả: {item.item.descriptionService} Mô tả này dài lắm nên phải để đoạn text này dài
            ra.
          </Text>
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

export default ServiceProfileShop

const styles = StyleSheet.create({})