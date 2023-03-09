import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Block from '../../components/Block'
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProducScreen from './ProducScreen';
import ProductScreeen1 from './ProductScreeen1';
// import { useNavigation } from '@react-navigation/native';


const FavouriteProducts = () => {
  // const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(true);
  const [activeCategory1, setActiveCategory1] = useState(false);
  const [activeCategory2, setActiveCategory2] = useState(false);

  

  return (
    <View style={styles.container}>
        <Block row={1} paddingVertical={15} paddingHorizontal={10}>
          <Block width={'40%'}>
            <Image
              source={require('../../assets/image/backpet.png')}
              style={{marginTop: 8}}></Image>
          </Block>
          <Block width={'50%'}>
            <Text size={20} color={'black'} bold>
                Yêu thích
            </Text>
          </Block>
        </Block>

        <Block paddingHorizontal={10}>
        <Block
          row={1}
          justifyCenter
          alignCenter
          backgroundColor={'#F2F3F2'}
          height={40}
          borderRadius={15}
          margin={10}>
          <Image
            source={require('./../../assets/image/timkiempet.png')}
            style={styles.seachImage}></Image>
          <TextInput
            placeholder="Tìm kiếm"
            style={{flex: 1}}
            underlineColorAndroid="transparent"></TextInput>
        </Block>
        </Block>

        <View style={styles.menu}>
          <TouchableOpacity onPress={() => {
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
          <TouchableOpacity onPress={() => {
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
          <TouchableOpacity onPress={() => {
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
      
    </View>
  )
}

export default FavouriteProducts

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: '3%'

  },
 

  ilist: {
    width: 80,
    height: 90,
    marginLeft: '5%',
  },
  ilist1: {
    width: 80,
    height: 90,
    marginLeft: '20%',
  },
  nut: {
    width: 32,
    height: 32,
    backgroundColor: '#F2F3F2',
    position: 'absolute',
    right: '5%',
    bottom: '8%',
    alignItems: 'center',
    borderRadius: 4,
    paddingTop: '15%',
  },
})