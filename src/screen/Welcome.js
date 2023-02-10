import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Welcome = () => {
    const [currentPage, setCurrentPage] = useState(0);


    const handleNextPage = () => {
      setCurrentPage(currentPage + 1);
      console.log('currentPage: ', currentPage)
    };
    const tieptuc = () => {
      console.log('tieptuc', currentPage);
    }
  
  
    const welcome1 = () => {
     if(currentPage === 0){
      return (
        <Text>
          Chưa có tính năng như các ứng dụng quản lý thú cưng, nhưng PetCare sẽ hỗ
          trợ chủ nuôi chăm sóc thú cưng.
        </Text>
      );
     }
      
    };
    const welcome2 = () => {
      if(currentPage === 1){
        return (
          <Text>
            TEsssss
          </Text>
        );
       }
    };
    const welcome3 = () => {
      if(currentPage === 2){
        return (
          <Text>
            HAHHAHHAHAH
          </Text>
        );
       }
    };
    return (
      <View style={styles.container}>
        <Image
          style={styles.hinh}
          source={require('../assets/image/main.png')}></Image>
  
        <Text style={styles.h1}>Xin chào bạn đến với Pet Care</Text>
        {
          currentPage === 0 ? 
          <View>{welcome1()}</View> : null
        }
         {
          currentPage === 1 ? 
          <View>{welcome2()}</View> : null
        }
         {
          currentPage === 2 ? 
          <View>{welcome3()}</View> : null
        }
      <View style={styles.bacham}>
        {currentPage === 0 ? <Ionicons color={'#18A2E1'} name="radio-button-on" size={20}/> 
        : <Ionicons name="radio-button-off" size={20}/>}
  
        {currentPage === 1 ? <Ionicons name="radio-button-on" color={'#18A2E1'}  size={20}/> 
        : <Ionicons name="radio-button-off" size={20}/>}
  
        {currentPage === 2 ? <Ionicons name="radio-button-on"  color={'#18A2E1'}  size={20}/> 
        : <Ionicons name="radio-button-off" size={20}/>}
  </View>
        {
          currentPage === 0 || currentPage === 1 ? 
          <TouchableOpacity style={styles.nut} onPress={()=>handleNextPage()}>
          <Text>Tiếp tục</Text>
        </TouchableOpacity> :
        <TouchableOpacity style={styles.nut} onPress={()=> tieptuc()}>
        <Text>Bắt đầu</Text>
      </TouchableOpacity>
        }
        
      </View>
    );
  };

export default Welcome

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FBFBFB',
        width: '100%',
        height: '100%',
      },
    
      pagerView: {
        width: '90%',
        height: 200,
        marginTop: 20,
        marginLeft: '5%',
      },
      hinh: {
        marginTop: 20,
        marginLeft: '1%',
        width: '100%',
        height: 300,
      },
      h1: {
        fontSize: 20,
        textAlign: 'center',
      },
      nut: {
        marginTop: '5%',
        width: '50%',
        height: 50,
        backgroundColor: '#18A2E1',
        borderRadius: 2,
        marginLeft: '26%',
        alignItems: 'center',
      },
      cham: {
        width: 10,
        height: 10,
      },
      bacham : {
        flexDirection: 'row',
        marginLeft: '40%',
        marginTop: '10%',
      },
})