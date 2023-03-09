import { StyleSheet, View, Image, TextInput, Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import Block from './../../components/Block';
import Text from './../../components/Text';


const HandbookDetail = ({navigation}) => {
  return (
    <Block>
      <Block row={1} >
          <Block width={'5%'} justifyCenter alignCenter>
          <TouchableOpacity onPress={()=> navigation.goBack()}>
            <Image source={require('./../../assets/image/backpet.png')} style = {{}} ></Image>
            </TouchableOpacity>
          </Block>
          <Block width={'95%'}>
          <Block row={1} justifyCenter alignCenter backgroundColor={'#F2F3F2'}
          height= {40} borderRadius = {15} margin={10}>
            <Image source={require('./../../assets/image/timkiempet.png')} style = {styles.seachImage} ></Image>
            <TextInput placeholder='Tìm kiếm' style = {{flex: 1}} underlineColorAndroid="transparent"></TextInput>

          </Block>
          </Block>
        </Block>


        <Block paddingHorizontal={30} paddingVertical= {10}>
          <Block>
            <Text size={18} color ={'#18A2E1'} bold>CHÓ CẢNH</Text>
          </Block>

          <Block marginTop={10}>
            <Text size={20} color={'black'} bold>Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?</Text>
          </Block>

          <Block marginTop={10}>
            <Image source={require('./../../assets/image/anhcamnang.png')} style = {{width: 340}} ></Image>

          </Block>

          
          <Block marginTop={20}>
          
            
            <Text>Giống chó Alaskan Malamute hay chó Alaska, là một trong những giống chó kéo xe cổ xưa nhất trên thế giới. Tên của giống chó này được đặt theo tên Mahlemut, một bộ tộc
                <Text color={'darkcyan'}  onPress={()=>{Linking.openURL('https://kinpetshop.com/cach-nuoi-meo-con/')}}> camerun </Text>
                <Text>sống du mục ở phía tây Alaska. Giống chó này được sử dụng làm chó kéo xe nhờ sức chịu đựng phi thường của chúng. Hiện nay chúng được nuôi chủ yếu để làm chó cảnh. Bài viết này sẽ chủ yếu bàn về dòng chó chó Alaskan thuần chủng size Standard (kích thước tiêu chuẩn) mang tính phổ biến hơn. Giant Alaska do không phổ biến ở Việt Nam nên sẽ không bàn tới.</Text>
            </Text>
            
            

          </Block>
        </Block>
      
    </Block>
  )
}

export default HandbookDetail

const styles = StyleSheet.create({
      seachImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    
      },
})