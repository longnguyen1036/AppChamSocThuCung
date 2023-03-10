import { Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Block from '../../components/Block'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProducScreen from '../Favourite/ProducScreen';
import ProductScreeen1 from '../Favourite/ProductScreeen1';

const Shop = () => {
    const [activeCategory, setActiveCategory] = useState(true);
    const [activeCategory1, setActiveCategory1] = useState(false);
    const [activeCategory2, setActiveCategory2] = useState(false);
  return (
    <View style = {{alignItems: 'center', backgroundColor: '#dcdcdc', flex: 1}}>
        
        <View style ={{height: '25%', width: '100%', backgroundColor: '#18A2E1', borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20}}>
        <Block row={1} alignCenter width={'100%'} justifySpaceBetween paddingHorizontal={10} marginTop={'2%'} >
            <TouchableOpacity>
                <FontAwesome5 name='chevron-left' size={25} color={'black'} />  
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name='search' size={25} color={'black'} />
            </TouchableOpacity>
        </Block>


        </View>
        <View style = {{height: '27%', width: '90%', backgroundColor: '#FFFFFF', borderRadius: 10,
    marginTop: '-25%'}}>
            <View>
                <View style = {{flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 10}}>
                    <View>
                        <Image source={require('../../assets/image/profileavatar.png')} style = {{}} ></Image>
                    </View>
                    <View style = {{marginLeft: 10, justifyContent: 'center'}}>
                        <Text style= {{fontSize: 20, fontWeight: '700', color: 'black'}}>phuocps19167</Text>
                        <Text style= {{marginTop: 10}}>phuocphps19167@fpt.edu.vn</Text>
                        <Text style= {{marginTop: 5}}>Hoàng Diệu - P Linh Trung - Thủ Đức</Text>
                    </View>
                    
                    
                </View>


            </View>
            <View style= {{flexDirection: 'row', justifyContent: 'space-around', marginTop: '1%'}}>
                <TouchableOpacity style={{backgroundColor: '#18A2E1', width: '30%', flexDirection: 'row',justifyContent: 'space-around',
            alignItems: 'center', padding: 10, borderRadius: 10}}  onPress={() => signOut()}>
                    <Text style= {{color: 'white', fontWeight: 'bold'}}>Camera</Text>
                    <FontAwesome5 name='camera-retro' size={25} color ={'white'} />
                    
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: '#18A2E1', width: '30%', flexDirection: 'row',justifyContent: 'space-around',
            alignItems: 'center', padding: 10, borderRadius: 10}}>
                    <Text style= {{color: 'white', fontWeight: 'bold'}}>Chat</Text>
                    <FontAwesome5 name='sms' size={25} color ={'white'} />
                    
                </TouchableOpacity>

            </View>

        </View>
        

        <View style={styles.menu}>
          <TouchableOpacity style={{paddingRight: '15%'}} onPress={() => {
            setActiveCategory(true);
            setActiveCategory1(false);
            setActiveCategory2(false);
          }}>
            <Text style={[
                    {
                      fontSize: 18,
                      fontWeight: "600",
                      color: 'gray',
                    },
                    activeCategory === true && {
                      color: 'black',
                      fontWeight: "700",
                      fontSize: 18.5,
                    },
                  ]}>Sản phẩm</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={() => {
            setActiveCategory(false);
            setActiveCategory1(true);
            setActiveCategory2(false);
          }}>
            <Text style={[
                    {
                      fontSize: 18,
                      fontWeight: "600",
                      color: 'gray',
                    },
                    activeCategory1 === true && {
                      color: 'black',
                      fontWeight: "700",
                      fontSize: 18.5,
                    },
                  ]}>Dịch vụ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft: '15%'}} onPress={() => {
            setActiveCategory(false);
            setActiveCategory1(false);
            setActiveCategory2(true);
          }}>
            <Text style={[
                    {
                      fontSize: 18,
                      fontWeight: "600",
                      color: 'gray',
                    },
                    activeCategory2 === true && {
                      color: 'black',
                      fontWeight: "700",
                      fontSize: 18.5,
                    },
                  ]}>Thú cưng</Text>
          </TouchableOpacity>
        </View>

        {activeCategory == true ?  <ProducScreen/>: activeCategory1 == true ? <ProductScreeen1/> : activeCategory2 == true ? <ProducScreen/>: null}
        
        

        {/* <View style = {{ width: '90%', marginTop: '3%', flexDirection: 'row',
    }}>
            <TouchableOpacity style={{backgroundColor: '#18A2E1', padding: 8, borderRadius: 8}}>
                <FontAwesome5 name='stream' size={30} color={'white'} />
            </TouchableOpacity>
            <View style={{marginLeft: '3%'}}>
                <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>Chỉnh sửa tài khoản</Text>
                <Text>Chỉnh sửa và quản lý tài khoản của bạn</Text>
            </View>

        </View> */}

        {/* <View style = {{ width: '90%', marginTop: '3%', backgroundColor: '#18A2E1', height: '18%',
    borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style ={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10}}>
                <Text style={{width: '90%', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Thay đổi mật khẩu</Text>
                <FontAwesome5 style={{width: '10%'}} name='chevron-right' size={18} />
            </TouchableOpacity>
            <View style={{borderWidth: 0.5, borderColor: 'white', width: '95%', marginTop: '3%'}}></View>
            <TouchableOpacity style ={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10, marginTop: '3%'}}>
                <Text style={{width: '90%', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Thay địa chỉ</Text>
                <FontAwesome5 style={{width: '10%'}} name='chevron-right' size={18} />
            </TouchableOpacity>

        </View> */}
        {/* <View style = {{ width: '90%', marginTop: '3%', flexDirection: 'row',
    }}>
            <TouchableOpacity style={{backgroundColor: '#18A2E1', padding: 8, borderRadius: 8}}>
                <FontAwesome5 name='comments' size={30} color={'white'} />
            </TouchableOpacity>
            <View style={{marginLeft: '3%'}}>
                <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>Hỗ trợ và phản hồi</Text>
                <Text>Liên hệ với chúng tôi</Text>
            </View>

        </View> */}
        
        
        {/* <View style = {{ width: '90%', marginTop: '3%', backgroundColor: '#18A2E1', height: '22%',
    borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
            <TouchableOpacity style ={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10}}>
                <Text style={{width: '90%', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Lịch sử mua hàng</Text>
                <FontAwesome5 style={{width: '10%'}} name='chevron-right' size={18} color={'white'} />
            </TouchableOpacity>
            <View style={{borderWidth: 0.5, borderColor: 'white', width: '95%', marginTop: '3%'}}></View>
            <TouchableOpacity style ={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10, marginTop: '3%'}}>
                <Text style={{width: '90%', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Lịch sử đặt dịch vụ</Text>
                <FontAwesome5 style={{width: '10%'}} name='chevron-right' size={18} color={'white'} />
            </TouchableOpacity>
            <View style={{borderWidth: 0.5, borderColor: 'white', width: '95%', marginTop: '3%'}}></View>
            <TouchableOpacity style ={{flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 10, marginTop: '3%'}}>
                <Text style={{width: '90%', fontSize: 16, color: 'white', fontWeight: 'bold'}}>Đăng xuất</Text>
                <FontAwesome5 style={{width: '10%'}} name='chevron-right' size={18} color={'white'} />
            </TouchableOpacity>

        </View> */}
        
      
    </View>
  )
}

export default Shop

const styles = StyleSheet.create({
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '3%'
    
      },
})