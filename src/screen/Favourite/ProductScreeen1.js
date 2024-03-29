import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const DATA = [
    {
      id: '1',
      title: 'First Item',
      price: 800000,
      price1: 900000,
      address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
      image: require('../../assets/image/profileavatar.png'),
    },
    {
        id: '2',
        title: 'First Item',
        price: 700000,
        price1: 800000,
        address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
        image: require('../../assets/image/profileavatar.png'),
    },
    {
        id: '3',
        title: 'First Item',
        price: 600000,
        price1: 700000,
        address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
        image: require('../../assets/image/profileavatar.png'),
    },
    {
        id: '4',
        title: 'First Item',
        price: 500000,
        price1: 600000,
        address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
        image: require('../../assets/image/profileavatar.png'),
    },
    {
        id: '5',
        title: 'First Item',
        price: 400000,
        price1: 400000,
        address: 'Địa chỉ: 147 Nguyễn Sỹ Sách, phường 15, Tân Bình, thành phố Hồ Chí Minh.',
        image: require('../../assets/image/profileavatar.png'),
    },
  ];

  const Item = ({title, price, image, price1, address}) => (
    <View style={{width: 380, backgroundColor: '#E6EAED', flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderRadius: 8, marginTop: '5%' }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image source={image}></Image>
            </View>
            <View>
                <View style ={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <View>
                        <Text style={{fontSize: 18, color: 'black'}}>{title}</Text>
                        <Text style={{color: 'red'}}>{price}</Text>
                        <Text style={{color: 'black'}}>{price1}</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: 'white', borderRadius: 5, width: 25, height: 25, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 style={{}} color={'black'} name='chevron-right' size={18} />

                    </TouchableOpacity>

                </View>
                <View>
                    <Text>Cửa hàng: Petmart</Text>
                    <Text style={{width: 250, fontSize: 16, color: 'black'}}>{address}</Text>

                </View>
            </View>

        </View>
  );

const ProductScreeen1 = () => {
  return (
    <SafeAreaView style={{paddingHorizontal: '3%'}}>
        <FlatList
            
            data={DATA}
            renderItem={({item}) => <Item title={item.title} price={item.price} image={item.image} 
            price1={item.price1} address={item.address}/>}
            keyExtractor={item => item.id}
        
        />
      </SafeAreaView>
  )
}

export default ProductScreeen1

const styles = StyleSheet.create({})