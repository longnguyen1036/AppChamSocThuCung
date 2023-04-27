import { StyleSheet, View, Image, TextInput, FlatList,SafeAreaView, } from 'react-native'
import React from 'react'
import Block from './../../components/Block';
import Text from './../../components/Text';
import { HANDBOOK_DETAIL_SCREEN } from '../../router/ScreenName';
import { TouchableOpacity } from 'react-native-gesture-handler';


const DATA = [
    {
      id: 1,
      title: 'Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?',
      image: require('./../../assets/image/anhcamnang.png'),
      description: 'Giống chó Alaskan Malamute hay chó Alaska, là một trong những giống chó kéo xe',
    },
    {
      id: 2,
      title: 'Hãy dừng lại nếu bạn đang cho chó mèo ăn chay',
      image: require('./../../assets/image/anhcamnang1.png'),
      description: 'Hãy dừng ngay lại việc cho chó mèo ăn chay hoặc rau củ quả với..',
    },
    {
      id: 3,
      title: 'Chu kỳ kinh nguyệt của chó cái (sa lơ) bao nhiêu ngày?',
      image: require('./../../assets/image/camnang3.png'),
      description: 'Cứ nửa năm một lần là đến chu kỳ kinh nguyệt của chó. 1 năm ...',
    },
    {
      id: 4,
      title: 'Tẩy giun cho chó và những điều bạn cần phải biết',
      image: require('./../../assets/image/camnang4.png'),
      description: 'Tẩy giun cho chó và phòng ngừa giun sán là việc rất quan trọng. Cũng ...',
    },
    {
      id: 5,
      title: 'Phải làm sao khi chó bị đau chân và đi khập khiễng?',
      image: require('./../../assets/image/camnang5.png'),
      description: 'Chó bị đau chân cà nhắc có thể do nhiều nguyên nhân bởi loài chó ...',
    },
    {
      id: 6,
      title: 'Cách chăm sóc chó mang thai tại nhà cần phải biết',
      image: require('./../../assets/image/anhcamnang6.png'),
      description: 'Việc chăm sóc chó mang thai tại nhà cũng không hề đơn giản. Nếu bạn ..',
    },
    {
      id: 7,
      title: 'Từng bước cách chăm sóc chó mẹ sau sinh mổ đẻ',
      image: require('./../../assets/image/camnang7.png'),
      description: 'Chăm sóc chó mẹ sau sinh thường hoặc mổ đẻ là việc làm rất quan ...',
    },
    {
      id: 8,
      title: 'Danh sách các thuốc tẩy giun cho chó con an toàn',
      image: require('./../../assets/image/anhcamnang8.png'),
      description: 'Mua thuốc tẩy giun cho chó con là một việc nhất thiết bạn phải làm khi nuôi một chú chó',
    },
    {
      id: 9,
      title: 'Hướng dẫn từng bước đỡ đẻ cho chó ngay tại nhà',
      image: require('./../../assets/image/anhcamnang9.png'),
      description: 'Quá trình đỡ đẻ cho chó bao gồm nhiều trình tự khác nhau. Nếu bạn ...',
    },
  
  ];
  
  
 

const Handbook = ({navigation}) => {
  const Item = ({title, image, description}) => (
    <TouchableOpacity onPress={ ()=>navigation.navigate(HANDBOOK_DETAIL_SCREEN)}>
    <View elevation={5} style={styles.item}>
      <Image source={image} style = {{ width: '100%'}} ></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      
    </View>
    </TouchableOpacity>
  );

  return (
    <Block backgroundColor={'#E6EAED'}>
      <Block>
        
        <Block row={1} paddingVertical={20} paddingHorizontal= {20} >
          <Block width={'40%'} >
            <Image source={require('./../../assets/image/backpet.png')} style = {{}} ></Image>
          </Block>
          <Block width={'50%'}>
            <Text size={20} color={'black'} bold >Cẩm nang</Text>
          </Block>
        </Block>
        
        <Block paddingHorizontal={10} >
          <Block
           row={1}
           justifyCenter
           alignCenter
           backgroundColor={'#F2F3F2'}
           height= {40}
           borderRadius={15}
           margin= {10}>
            <Image source={require('./../../assets/image/timkiempet.png')} style = {styles.seachImage} ></Image>
            <TextInput placeholder='Tìm kiếm' style = {{flex: 1}} underlineColorAndroid="transparent"></TextInput>

          </Block>

        </Block>


        <Block>
          <SafeAreaView >

            <FlatList
            
              data={DATA}
              renderItem={({item}) => <Item title={item.title} image = {item.image} description = {item.description} />}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>

        </Block>

        



      </Block>
    </Block>
  )
}

export default Handbook

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F7FEF9',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
      },
      title: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
      },
      description: {
        fontSize: 14,
      },
      seachImage: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    
      },
})