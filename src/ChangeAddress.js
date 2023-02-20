import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

const ChangeAddress = () => {
  return (
    <View>
      <View style = {{flexDirection: 'row', alignItems: 'center', width: '100%',
    justifyContent: 'space-between', paddingHorizontal: 10,
    marginTop: '5%'}}>
        <Ionicons name='chevron-back-outline' size={30} />
        <Text style = {{ width: '70%', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Thay đổi địa chỉ</Text>

      </View>

      <View style = {{paddingHorizontal: 20, marginTop: '10%'}}>
        <Text style = {{color: 'black', fontSize: 20, fontWeight: 'bold' }}>Địa chỉ hiện tại</Text>
        <Text>Hoàng Diệu - P Linh Trung - Thủ Đức</Text>
      </View>
      <View style = {{paddingHorizontal: 20, marginTop: '17%'}}>
        <Text style = {{color: 'black', fontSize: 16 }}>Địa chỉ</Text>
        <TextInput style = {{borderBottomWidth: 0.5}} placeholder='Nhập địa chỉ mới'></TextInput>
      </View>

      <View style = {{paddingHorizontal: 20, marginTop: '20%'}}>
        <TouchableOpacity style = {{backgroundColor: '#52B4FF', width: '100%', height: '33%',
            alignItems: 'center', justifyContent: 'center', borderRadius: 8,}}>
                    <Text style = {{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Tiếp tục</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeAddress

const styles = StyleSheet.create({})