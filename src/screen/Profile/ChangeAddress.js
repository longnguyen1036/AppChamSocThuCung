import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Block from '../../components/Block'
import Text from '../../components/Text'

const ChangeAddress = ({navigation}) => {
  return (
    <Block>
      <Block row={1} alignCenter width={'100%'} paddingHorizontal={10} marginTop={'5%'} justifySpaceBetween>
      <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Ionicons name='chevron-back-outline' size={30} />
        </TouchableOpacity>
        <Text style = {{ width: '70%', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Thay đổi địa chỉ</Text>

      </Block>

      <Block paddingHorizontal={20} marginTop={'10%'}>
        <Text color={'black'} size ={20} bold>Địa chỉ hiện tại</Text>
        <Text>Hoàng Diệu - P Linh Trung - Thủ Đức</Text>
      </Block>
      <Block paddingHorizontal={20} marginTop={'17%'}>
        <Text color={'black'} size={16}>Địa chỉ</Text>
        <TextInput style = {{borderBottomWidth: 0.5}} placeholder='Nhập địa chỉ mới'></TextInput>
      </Block>

      <Block paddingHorizontal={20} marginTop={'20%'}>
        <TouchableOpacity style = {{backgroundColor: '#52B4FF', width: '100%', height: '33%',
            alignItems: 'center', justifyContent: 'center', borderRadius: 8,}}>
                    <Text color={'white'} size={17} bold>Tiếp tục</Text>
        </TouchableOpacity>
      </Block>
    </Block>
  )
}

export default ChangeAddress

const styles = StyleSheet.create({})