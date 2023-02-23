import { StyleSheet, View, Image, TextInput, FlatList,SafeAreaView, } from 'react-native'
import React from 'react'
import Block from './../../components/Block';
import Text from './../../components/Text';

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Giống chó Alaskan Malamute: khổng lồ liệu giá có rẻ?',
      image: require('./../../assets/image/anhcamnang.png'),
      description: 'Giống chó Alaskan Malamute hay chó Alaska, là một trong những giống chó kéo xe',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Hãy dừng lại nếu bạn đang cho chó mèo ăn chay',
      image: require('./../../assets/image/anhcamnang1.png'),
      description: 'Hãy dừng ngay lại việc cho chó mèo ăn chay hoặc rau củ quả với..',
    },
  
  ];
  
  
  const Item = ({title, image, description}) => (
    <View elevation={5} style={styles.item}>
      <Image source={image} style = {{ width: 340}} ></Image>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );

const Handbook = () => {
  return (
    <Block>
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