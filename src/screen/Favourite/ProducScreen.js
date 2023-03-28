import { StyleSheet, Text, View ,Image, TouchableOpacity, TextInput, SafeAreaView, FlatList } from 'react-native'
import React from 'react'

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const DATA = [
    {
      id: '1',
      title: 'First Item',
      price: 800000,
      image: require('../../assets/image/profileavatar.png'),
    },
    {
      id: '2',
      title: 'Second Item',
      price: 900000,
      image: require('../../assets/image/profileavatar.png'),
    },
    {
      id: '3',
      title: 'Third Item',
      price: 100000,
      image: require('../../assets/image/profileavatar.png'),
    },
    {
    id: '4',
    title: 'Four Item',
    price: 100000,
    image: require('../../assets/image/profileavatar.png'),
    },
    {
    id: '5',
    title: 'Five Item',
    price: 100000,
    image: require('../../assets/image/profileavatar.png'),
    },
  ];

  const Item = ({title, price, image}) => (
    <View style ={{backgroundColor: '#E6EAED', width: 150, height: 186, borderRadius: 8, paddingHorizontal: 8, marginRight: '8%', marginTop: '5%'}}>
            <View style={{alignItems: 'center'}}>
                <Image source={image}></Image>
            </View>
            <View style ={{backgroundColor: 'white', borderRadius: 8, marginTop: '12%', paddingHorizontal: 5, paddingVertical: 5 }}>
                <View style={{marginTop: '2%'}}>
                    <Text style={{fontSize: 15, fontWeight: '500', color: 'black'}}>{title}</Text>
                </View>
                <View style={{marginTop: '8%', flexDirection: 'row', justifyContent: 'space-between',}}>
                    <Text style={{color: 'black'}}>{price}</Text>
                    <TouchableOpacity style={{backgroundColor: '#E6EAED', borderRadius: 5, width: 25, height: 25, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 style={{}} color={'black'} name='chevron-right' size={18} />

                    </TouchableOpacity>
                </View>
            </View>
      
        </View>
  );

const ProducScreen = () => {
  return (
    <SafeAreaView style={{paddingHorizontal: '10%'}}>
        <FlatList
            numColumns={2}
            data={DATA}
            renderItem={({item}) => <Item title={item.title} price={item.price} image={item.image} />}
            keyExtractor={item => item.id}
        
        />
      </SafeAreaView>
  )
}

export default ProducScreen

const styles = StyleSheet.create({})