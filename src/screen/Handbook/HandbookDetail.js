import { StyleSheet, Text, View, Image, TextInput, Linking } from 'react-native'
import React from 'react'

const HandbookDetail = () => {
  return (
    <View>
      <View style = {{flexDirection: 'row'}}>
          <View style= {{width: '5%',justifyContent: 'center',
    alignItems: 'center', }}>
            <Image source={require('./../../assets/image/backpet.png')} style = {{}} ></Image>
          </View>
          <View style= {{width: '95%'}}>
          <View style = {styles.seachViewContainer}>
            <Image source={require('./../../assets/image/timkiempet.png')} style = {styles.seachImage} ></Image>
            <TextInput placeholder='Tìm kiếm' style = {{flex: 1}} underlineColorAndroid="transparent"></TextInput>

          </View>
          </View>
        </View>


        <View style = {styles.viewContainer}>
          <View>
            <Text style= {styles.titleChocanh}>CHÓ CẢNH</Text>
          </View>

          <View style = {{marginTop: 10}}>
            <Text style = {styles.titleChocanh1}>Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?</Text>
          </View>

          <View style = {{marginTop: 10}}>
            <Image source={require('./../../assets/image/anhcamnang.png')} style = {{width: 340}} ></Image>

          </View>

          
          <View style = {{marginTop: 20}}>
          
            
            <Text>Giống chó Alaskan Malamute hay chó Alaska, là một trong những giống chó kéo xe cổ xưa nhất trên thế giới. Tên của giống chó này được đặt theo tên Mahlemut, một bộ tộc
                <Text style = {{color: 'darkcyan'}} onPress={()=>{Linking.openURL('https://kinpetshop.com/cach-nuoi-meo-con/')}}> camerun </Text>
                <Text>sống du mục ở phía tây Alaska. Giống chó này được sử dụng làm chó kéo xe nhờ sức chịu đựng phi thường của chúng. Hiện nay chúng được nuôi chủ yếu để làm chó cảnh. Bài viết này sẽ chủ yếu bàn về dòng chó chó Alaskan thuần chủng size Standard (kích thước tiêu chuẩn) mang tính phổ biến hơn. Giant Alaska do không phổ biến ở Việt Nam nên sẽ không bàn tới.</Text>
            </Text>
            
            

          </View>
        </View>
      
    </View>
  )
}

export default HandbookDetail

const styles = StyleSheet.create({
    seachViewContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F3F2',
        height: 40,
        borderRadius: 15,
        margin: 10,
    
      },
      seachImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    
      },
      viewContainer: {
        paddingHorizontal: 30, 
        paddingVertical: 10
      },
      titleChocanh: {
        fontSize: 18, 
        color: '#18A2E1', 
        fontWeight: '600'
    
      },
    
      titleChocanh1: {
        fontSize: 20, 
        color: 'black', 
        fontWeight: '700'
    
      }
})