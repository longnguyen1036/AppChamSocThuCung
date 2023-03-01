import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView, Dimensions } from 'react-native'
import React, {useState} from 'react'
import Block from '../../components/Block'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 2 - 30;

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
        id: '58694a0f-3da1-471f-bd96-145571e29d79',
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
      <ScrollView>
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
        
        {activeCategory == 0 ?  <ScrollView contentContainerStyle={{height:300, flexWrap:'wrap'}} style={{marginTop: 10, paddingHorizontal: 80,}}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: 20 , marginTop: 10}}
                key={index}
                
              >
                <Image source={category.image}/>
                <Text>
                  {category.title}
                </Text>
                <Text>
                  {category.price}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView> : activeCategory == 1 ? <ScrollView  style={{marginTop: 10, paddingHorizontal: 20}}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: 20 , marginTop: 10, flexDirection: 'row', backgroundColor: 'aquamarine',
              justifyContent: 'space-around', borderRadius: 8}}
                key={index}
                
              >
                <Image source={category.image}/>
                <View>
                  <Text>
                    {category.title}
                  </Text>
                  <Text>
                    {category.price}
                  </Text>
                </View>
                
              </TouchableOpacity>
            ))}
        </ScrollView> : activeCategory == 2 ? <ScrollView contentContainerStyle={{height:300, flexWrap:'wrap'}} style={{marginTop: 10, paddingHorizontal: 80,}}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: 20 , marginTop: 10}}
                key={index}
                
              >
                <Image source={category.image}/>
                <Text>
                  {category.title}
                </Text>
                <Text>
                  {category.price}
                </Text>
              </TouchableOpacity>
            ))}
        </ScrollView>: null}
  
        


        
        
        

        {/* <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: 20,
              marginHorizontal: 15,
            }}
          >
            {DATA[activeCategory].recipes.map((item) => (
              <TouchableOpacity
                style={{ width: ITEM_WIDTH, marginBottom: 20 }}
                key={item.id}
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + 30,
                    borderRadius: 20,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    marginTop: 10,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'gray',
                    marginVertical: 5,
                  }}
                >
                  Today discount {item.discount}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  $ {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View> */}


            
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ProfileShop1

const styles = StyleSheet.create({})