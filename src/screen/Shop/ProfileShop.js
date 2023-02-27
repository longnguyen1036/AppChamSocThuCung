import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Block from '../../components/Block'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ProfileShop = () => {
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
                    <View>
                        <Image source={require('../../assets/image/profileavatar')} style = {{}} ></Image>
                    </View>
                    <View style = {{marginLeft: 10, justifyContent: 'center'}}>
                        <Text style= {{fontSize: 20, fontWeight: '700', color: 'black'}}>phuocps19167</Text>
                        <Text style= {{marginTop: 10}}>phuocphps19167@fpt.edu.vn</Text>
                        <Text style= {{marginTop: 5}}>Hoàng Diệu - P Linh Trung - Thủ Đức</Text>
                    </View>
                    
                    
                </View>


            </View>
            <View style= {{flexDirection: 'row', justifyContent: 'space-around', marginTop: '5%'}}>
                <TouchableOpacity style={{backgroundColor: '#18A2E1', width: '30%', flexDirection: 'row',justifyContent: 'space-around',
            alignItems: 'center', padding: 10, borderRadius: 10}}>
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
    </View>
  )
}

export default ProfileShop

const styles = StyleSheet.create({})