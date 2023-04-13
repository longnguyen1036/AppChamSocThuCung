import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Block from '../../components/Block'
import { useRoute , useNavigation} from '@react-navigation/native'
import productApi from '../../api/productApi'
import { PETS_DETAIL_SCREEN } from '../../router/ScreenName'

const PetProfileShop = () => {
  const navigation = useNavigation()
  const router = useRoute()
  const {_id} = router.params
  const [listProduct, setListProduct] = useState([])
  
  const getAllProduct = async () => {
      const res = await productApi.getAllProductStore(_id)
      // console.log('res', res.data.data.idpetStore)
      setListProduct(res.data.data.idpetStore)
  }

  useEffect(() => {
    getAllProduct()
  },[])

  const renderItem = (item) => {
    console.log('renderItem', item.item)
    return(
      <TouchableOpacity 
      onPress={() => navigation.navigate(PETS_DETAIL_SCREEN,{
        _id: item.item._id
      })}
      
      style={{backgroundColor: 'red', width: 100, height: 100}}>
          <Text>{item.item.namePet}</Text>
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

export default PetProfileShop

const styles = StyleSheet.create({})