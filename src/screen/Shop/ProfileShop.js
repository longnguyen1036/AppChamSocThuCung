import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, FlatList, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Block from '../../components/Block'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  

const ProfileShop = () => {
    
    const [isClick, setIsClick]= useState(true)
    const [activeCategory, setActiveCategory] = useState(0);

    // const Item = ({title, id}) => (
    //     <TouchableOpacity onPress={()=>{setIsClick(id); console.log('iddd', isClick)}} style={{backgroundColor: '#f9c2ff',
    //     padding: 6,
    //     marginVertical: 6,
    //     marginHorizontal: 16, height: 40}}>
    //       <Text style={{fontSize: 18, fontWeight: '600'}}>{title}</Text>
    //     </TouchableOpacity>
    //   );
    
      
        
      

  return (
    <View style = {{alignItems: 'center', backgroundColor: '#dcdcdc', height: '100%', width: '100%'}}>
      <View style= {{flexDirection: 'row', width: '100%', justifyContent: 'space-between',
        paddingHorizontal: '3%', paddingVertical: '3%',
        height: '25%', width: '100%', backgroundColor: '#18A2E1', borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20}}>
                <TouchableOpacity>
                    <FontAwesome5 name='chevron-left' size={25} color={'white'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <FontAwesome5 name='search' size={25} color={'white'} />
                </TouchableOpacity>

        </View>


        <View style = {{height: '30%', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10,
    marginTop: '-20%'}}>
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

        {/* <View style={{height: 50, backgroundColor: 'black'}}>
            <FlatList
                horizontal={true}
                data={DATA}
                renderItem={({item}) => <Item title={item.title} id={item.id} />}
                keyExtractor={item => item.id}
                
            />
            
        </View> */}
        {/* <View style={{marginTop: '3%', flexDirection: 'row', width: '90%', justifyContent: 'space-around'}}>
            <TouchableOpacity onPress={()=>{setIsClick(true)}}>
                <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>San Pham</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setIsClick(false)}}>
                <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>Dich Vu</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize: 20, color: 'black', fontWeight: '800'}}>Thu Cung</Text>
            </TouchableOpacity>
        </View> */}

        <ScrollView horizontal>
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

        
        
        
        
        

        

        

        
        
    </View>
  )
}

export default ProfileShop

const styles = StyleSheet.create({})