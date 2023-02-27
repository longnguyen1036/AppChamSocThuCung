import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView,  } from 'react-native'
import React, {useState} from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'



const PetDetail = () => {

    const [ItemsImage, setItemsImage] = useState([
        { key: 1, image: require('../src/assets/image/detail1.png')},
        { key: 2, image: require('../src/assets/image/detail2.png')},
        { key: 3, image: require('../src/assets/image/detail1.png')},
        { key: 4, image: require('../src/assets/image/detail2.png')},
        { key: 5, image: require('../src/assets/image/detail1.png')},
        { key: 6, image: require('../src/assets/image/detail2.png')},
        { key: 7, image: require('../src/assets/image/detail1.png')},
        { key: 8, image: require('../src/assets/image/detail2.png')},
        { key: 9, image: require('../src/assets/image/detail1.png')},
    ])

    const [selectedImage, setSelectedImage] = useState(require('../src/assets/image/detail1.png'));


  return (
    <View style={{ backgroundColor: '#dcdcdc', height: '100%'}}>
      <View style = {{alignItems: 'center',}}>
        <View style= {{flexDirection: 'row', width: '100%', justifyContent: 'space-between',
    paddingHorizontal: '3%', paddingVertical: '3%'}}>
            <TouchableOpacity>
                <FontAwesome5 name='chevron-left' size={30} color={'black'} />
            </TouchableOpacity>

            <TouchableOpacity>
                <FontAwesome5 name='heart' size={30} color={'black'} />
            </TouchableOpacity>

        </View>

        <View>
            <Image source={selectedImage} style = {{width: 200, height: 200, borderRadius: 8}} ></Image>
        </View>

        <ScrollView style={{width: '40%'}} horizontal={true}>

        {
            ItemsImage.map((object)=>{
                return (
                    <TouchableOpacity onPress={()=> setSelectedImage(object.image)} key={object.key} style = {{alignItems: 'center', justifyContent: 'center', margin: 8}}>
                        <Image source={object.image}></Image>
                    </TouchableOpacity>
                );
            })
        }
        </ScrollView>
        <View style ={{marginTop: '3%', width:'73%'}}>
            <Text style ={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>BEAGLE CƯNG CƯNG</Text>
            <Text style ={{fontSize: 18, fontWeight: 'bold'}}>700.000đ</Text>
            <Text style ={{fontSize: 17, color: 'black', fontWeight: '600'}}>Tình trạng: Còn hàng</Text>
        </View>
        <View style={{flexDirection:'row', width:'73%', marginTop: '3%'}}>
            <TouchableOpacity style={{backgroundColor: 'white', padding: 8, borderRadius: 8}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>Gioi tinh</Text>
                <Text>Giong cai</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: 'white', marginLeft: '5%', padding: 8, borderRadius: 8}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>Tuoi</Text>
                <Text>6 thang</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: 'white', marginLeft: '5%', padding: 8, borderRadius: 8}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>Can nang</Text>
                <Text>4,7kg</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{backgroundColor: 'white', marginLeft: '5%', padding: 8, borderRadius: 8}}>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '700'}}>Giong</Text>
                <Text>Mèo</Text>
            </TouchableOpacity>
        </View>

        <View style={{marginTop: '5%', flexDirection: 'row', width: '73%', justifyContent: 'space-between', backgroundColor: 'white', alignItems: 'center',
    padding: 8, borderRadius: 8}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{backgroundColor: '#18A2E1', padding: 5, borderRadius: 8, alignItems: 'center'}}>
                    <Image source={require('../src/assets/image/iconimg.png')} ></Image>
                </View>
                
                <View style={{marginLeft: '5%'}}>
                    <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>matpetfamily</Text>
                    <Text>Store</Text>
                </View>
            </View>
            
            <TouchableOpacity style={{backgroundColor: '#18A2E1', borderRadius: 8, alignItems: 'center', justifyContent: 'center', padding: 5, height: 40}}>
                <FontAwesome5 name='comments' size={20} color={'white'} />
            </TouchableOpacity>
        </View>

        <TouchableOpacity style={{marginTop: '5%', backgroundColor: '#18A2E1', padding: '3%', borderRadius: 8}}>
            <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>Thêm vào giỏ hàng</Text>

        </TouchableOpacity>

      </View>
    </View>
  )
}

export default PetDetail

const styles = StyleSheet.create({})