import { StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useTogglePasswordVisibility } from './useTogglePasswordVisibility'

const ChangeAcount = () => {

    const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    useTogglePasswordVisibility();
    const [password, setPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');


    



  return (
    <View>
      <View style = {{flexDirection: 'row', alignItems: 'center', width: '100%',
    justifyContent: 'space-between', paddingHorizontal: 10,
    marginTop: '5%'}}>
        <Ionicons name='chevron-back-outline' size={30} />
        <Text style = {{ width: '70%', color: 'black', fontSize: 20, fontWeight: 'bold' }}>Thay đổi địa chỉ</Text>

      </View>

      
      <View style = {{paddingHorizontal: 20, marginTop: '17%'}}>
        <Text style = {{color: 'black', fontSize: 16 }}>Tên tài khoản</Text>
        <TextInput style = {{borderBottomWidth: 0.5}} placeholder='Nhập tên tài khoản'></TextInput>
      </View>

      <View style = {{paddingHorizontal: 20, marginTop: '5%'}}>
        <Text  style = {{color: 'black', fontSize: 16 }}>Mật khẩu hiện tại</Text>
        <View style = {{width: '100%',
    
            flexDirection: 'row',
            alignItems: 'center'}}>
        <TextInput 
            secureTextEntry = {passwordVisibility}
            value={password}
            enablesReturnKeyAutomatically
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
            name="password"
            autoCorrect={false} style = {{borderBottomWidth: 0.5, width: '90%'}} placeholder='Nhập mật khẩu hiện tại'></TextInput>
        <Pressable onPress={handlePasswordVisibility}>
          <Ionicons name={rightIcon} size={22} color="#232323" />
        </Pressable>
        </View>
        
      </View>

      <View style = {{paddingHorizontal: 20, marginTop: '5%'}}>
        <Text style = {{color: 'black', fontSize: 16 }}>Mật khẩu mới</Text>
        <View style = {{width: '100%',
    
    flexDirection: 'row',
    alignItems: 'center'}}>

        <TextInput 
         secureTextEntry = {passwordVisibility}
         value={newpassword}
         enablesReturnKeyAutomatically
         onChangeText={text => setNewPassword(text)}
         autoCapitalize="none"
         name="newpassword"
         autoCorrect={false} style = {{borderBottomWidth: 0.5, width: '90%'}} placeholder='Nhập mật khẩu mới'></TextInput>
        <Pressable onPress={handlePasswordVisibility}>
          <Ionicons name={rightIcon} size={22} color="#232323" />
        </Pressable>
        </View>
        
      </View>

      <View style = {{paddingHorizontal: 20, marginTop: '5%'}}>
        <Text style = {{color: 'black', fontSize: 16 }}>Xác nhận mật khẩu</Text>

        <View style = {{width: '100%',
    
    flexDirection: 'row',
    alignItems: 'center'}}>

        <TextInput
           secureTextEntry = {passwordVisibility}
           value={confirmpassword}
           enablesReturnKeyAutomatically
           onChangeText={text => setConfirmPassword(text)}
           autoCapitalize="none"
           name="confirmpassword"
           autoCorrect={false} style = {{borderBottomWidth: 0.5, width: '90%'}} placeholder='Xác nhận mật khẩu mới'></TextInput>
        <Pressable onPress={handlePasswordVisibility}>
          <Ionicons name={rightIcon} size={22} color="#232323" />
        </Pressable>

        </View>
        
      </View>

      <View style = {{paddingHorizontal: 20, marginTop: '15%'}}>
        <TouchableOpacity style = {{backgroundColor: '#52B4FF', width: '100%', height: '30%',
            alignItems: 'center', justifyContent: 'center', borderRadius: 8,}}>
                    <Text style = {{color: 'white', fontSize: 17, fontWeight: 'bold'}}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChangeAcount

const styles = StyleSheet.create({})