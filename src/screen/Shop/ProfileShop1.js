import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native'
import React, {useState} from 'react'
import Block from '../../components/Block'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign';



const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - 30;


const DATA1 = [
  {
    id: 1,
    name: 'Tỉa lông chó',
    price: 1800000 + ' VND',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
  {
    id: 2,
    name: 'BEAGLE CƯNG CƯNG',
    price: 2000000 + ' VND',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
  {
    id: 3,
    name: 'BEAGLE CƯNG CƯNG',
    price: '',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
];

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Sản phẩm',
      image: require("../../assets/image/profileavatar.png"),
      price: 72,
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Dịch vụ',
      image: require("../../assets/image/profileavatar.png"),
      price: 20,
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Thú cưng',
      image: require("../../assets/image/profileavatar.png"),
      price: 39,
    },

    {
        id: '58694a0f-3da1-471f-bd96-145571e29d78',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d76',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d70',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },

      {
        id: '58694a0f-3da1-471f-bd96-145571e29d762',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d71123',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d124',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7125',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d7126',
        title: 'Khác',
        image: require("../../assets/image/profileavatar.png"),
        price: 39,
      },
  ];
  const Item = ({title, image, price}) => (
    <TouchableOpacity style={{padding: 6}}>
      <Image source={image}/>
      <Text style={{}}>{title}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  );

const ProfileShop1 = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <SafeAreaView>
      <ScrollView decelerationRate={0.5}>
        <View style ={{backgroundColor: '#dcdcdc'}}>
            <View style={{backgroundColor: '#18A2E1', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10,
             paddingVertical: 10,
        height: 150, borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20}}>
                <TouchableOpacity>
                    <FontAwesome5 name='chevron-left' size={25} color={'white'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome5 name='search' size={25} color={'white'} />
                </TouchableOpacity>
            </View>

            <View style={{paddingHorizontal: 20, marginTop: -60}}>
                <View style ={{backgroundColor: 'white', height: 200, borderRadius: 8}}>
                    <View>
                        <View style = {{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10}}>
                            <View style = {{backgroundColor: '#18A2E1', borderRadius: 8}}>
                                <Image source={require('../../assets/image/matpet.png')} style = {{}} ></Image>
                            </View>
                            <View style = {{marginLeft: 10, justifyContent: 'center'}}>
                                <Text style= {{fontSize: 20, fontWeight: '700', color: 'black'}}>matpetfamily</Text>
                                <Text style= {{marginTop: 10}}>Store</Text>
                                <Text style= {{marginTop: 5}}>Hoàng Diệu - P Linh Trung - Thủ Đức</Text>
                            </View>
                            
                            
                        </View>


                    </View>


                    <View style= {{flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%', marginHorizontal: '3%'}}>
                <View style={{width: '30%', flexDirection: 'row',justifyContent: 'space-around',
            alignItems: 'center'}}>
                    <TouchableOpacity>
                        <Ionicons name='star' size={18} color={'#F80202'} />

                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: '2%'}}>
                        <Ionicons name='star' size={18} color={'#F80202'} />

                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: '2%'}}>
                        <Ionicons name='star' size={18} color={'#F80202'} />

                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: '2%'}}>
                        <Ionicons name='star' size={18} color={'#F80202'} />

                    </TouchableOpacity>
                    <TouchableOpacity style={{marginLeft: '2%'}}>
                        <Ionicons name='star-outline' size={18} color={'#F80202'} />

                    </TouchableOpacity>
                    
                </View>
                <TouchableOpacity style={{backgroundColor: '#18A2E1', width: '30%', flexDirection: 'row',justifyContent: 'space-around',
            alignItems: 'center', padding: 5, borderRadius: 10}}>
                    <Text style= {{color: 'white', fontWeight: 'bold'}}>Chat</Text>
                    <FontAwesome5 name='sms' size={25} color ={'white'} />
                    
                </TouchableOpacity>

            </View>


                </View>

            </View>

            <ScrollView horizontal style={{marginTop: 10, paddingHorizontal: 20}}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: 20 , marginTop: 10}}
                key={index}
                onPress={() => setActiveCategory(index)}
              >
                <Text
                  style={[
                    {
                      fontSize: 18,
                      fontWeight: "600",
                      color: 'gray',
                    },
                    activeCategory === index && {
                      color: 'black',
                      fontWeight: "700",
                      fontSize: 18.5,
                    },
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        
        {activeCategory == 0 ?  <ScrollView decelerationRate={0.5} style={{marginTop: -70}} contentContainerStyle={{flexWrap: 'wrap', height: '70%', paddingHorizontal: 10}} >
            {DATA.map((category, index) => (
              <Block
              marginLeft={'8%'}
              backgroundColor={'#E6EAED'}
              width={150}
              height={168}
              key={index}>
                <Image style={styles.ilist} source={category.image}></Image>
                <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={70}>
                  <Block paddingTop={5}>
                    <Text>{category.title}</Text>
                    <Text style={{marginTop: 7, fontSize: 12}}>{category.price} VND</Text>
                  </Block>
                  <TouchableOpacity style={styles.nut}>
                    <AntDesign name="right" size={25} />
                  </TouchableOpacity>
                </Block>
              </Block>



            ))}
        </ScrollView> : activeCategory == 1 ? <ScrollView  style={{marginTop: 10,}}>
            {DATA1.map((item, index) => (
              // <TouchableOpacity
              //   style={{ marginRight: 20 , marginTop: 10, flexDirection: 'row', backgroundColor: 'aquamarine',
              // justifyContent: 'space-around', borderRadius: 8}}
              //   key={index}
                
              // >
              //   <Image source={category.image}/>
              //   <View>
              //     <Text>
              //       {category.title}
              //     </Text>
              //     <Text>
              //       {category.price}
              //     </Text>
              //   </View>
                
              // </TouchableOpacity>

              <Block
                marginLeft={'10%'}
                backgroundColor={'#E6EAED'}
                width={330}
                height={120} 
                row={1}
                marginTop={10}>
                <Image style={styles.ilist} source={item.images}></Image>
                <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={110} width={220}>
                  <Block paddingTop={5}>
                    <Text>{item.name}</Text>
                    <Text style= {{color: 'red', fontSize: 12}}>{item.sale}</Text>
                    <Text style={{fontSize: 12}} >{item.price}</Text>
                    <Text style={{fontSize: 12}}>Cửa hàng{item.store}</Text>
                    <Text style={{fontSize: 12}}> Địa chỉ:{item.address}</Text>
                  
                  </Block>
                  <TouchableOpacity style={styles.nut}>
                    <AntDesign name="right" size={25} />
                  </TouchableOpacity>
                </Block>
              </Block>



            ))}
        </ScrollView> : activeCategory == 2 ? <ScrollView decelerationRate={0.5} style={{marginTop: -70}} contentContainerStyle={{flexWrap: 'wrap', height: '70%', paddingHorizontal: 10}}>
            {DATA.map((category, index) => (
              <Block
              marginLeft={'8%'}
              backgroundColor={'#E6EAED'}
              width={150}
              height={168}
              key={index}>
                <Image style={styles.ilist} source={category.image}></Image>
                <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={70}>
                  <Block paddingTop={5}>
                    <Text>{category.title}</Text>
                    <Text style={{marginTop: 7, fontSize: 12}}>{category.price} VND</Text>
                  </Block>
                  <TouchableOpacity style={styles.nut}>
                    <AntDesign name="right" size={25} />
                  </TouchableOpacity>
                </Block>
              </Block>
            ))}
        </ScrollView>: null}    
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileShop1

const styles = StyleSheet.create({
  ilist: {
    width: 80,
    height: 90,
    marginLeft: '5%',
  },
  nut: {
    width: 32,
    height: 32,
    backgroundColor: '#F2F3F2',
    position: 'absolute',
    right: '5%',
    bottom: '8%',
    alignItems: 'center',
    borderRadius: 4,
    paddingTop: '15%',
  },
})