import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PagerView from 'react-native-pager-view';
import {useNavigation} from '@react-navigation/native';
import Block from '../../components/Block';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { CART_SCREEN, PETS_DETAIL_SCREEN, PETS_SCREEN, PRODUCTS_DETAIL_SCREEN, PRODUCTS_SCREEN, PROFILE_SCREEN, SERVICES_DETAIL_SCREEN, SERVICES_SCREEN } from '../../router/ScreenName';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';

const Home = () => {
  const navigation = useNavigation();
  const [listRandom, setListRandom] = useState()



  const getAllRandom = async () => {
      const res = await productApi.getRandomProduct()
      setListRandom(res.data.data);
  }

  useEffect(() => {
      getAllRandom()
  },[])



  const ChangeScreen = (item) => {
        if(item.code === 1) {
          navigation.navigate(PRODUCTS_DETAIL_SCREEN,{
            _id: item._id
          })
        }else if(item.code === 2) {
          navigation.navigate(PETS_DETAIL_SCREEN,{
            _id: item._id 
          })
        }else{
          navigation.navigate(SERVICES_DETAIL_SCREEN,{
            _id: item._id
          })
        }
  }
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => ChangeScreen(item)}>
     <Block
          marginLeft={'8%'}
          backgroundColor={'white'}
          width={160}
         marginTop={12}
          radius={10}
          >
          <Image style={styles.ilist} source={{uri: item.image}}></Image>
          <Block
            paddingLeft={'5%'}
            padding={3}
            marginTop={8}
            height={70}
      
            >
            <Block width={140} paddingTop={5}>
              <Block width={'100%'} height={20} > 
              <Text bold>{item.name}</Text>
              </Block>
              <Block width={100} marginTop={10}>
                <Text color={'#18A2E1'} bold size={16}>
                  {formatMoney(item.price)}
                </Text>
              </Block>
            </Block>
            
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#DADADA'}}>
      <View style={styles.header}>
        <View style={styles.h1}>
          <Text style={styles.t1}>Welcome to</Text>
          <Text style={styles.t2}>Home</Text>
        </View>
        <View style={styles.h2}>

          <TouchableOpacity onPress={() => navigation.navigate(CART_SCREEN)}>
          <FontAwesome5
            style={styles.ic}
            color={'black'}
            name="shopping-bag"
            size={25}
          />
            </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(PROFILE_SCREEN)}>
          <Image
            style={styles.i1}
            source={require('../../assets/image/meo.png')}></Image>
            
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.banner}>
        <PagerView style={styles.pagerView} initialPage={0}>
          <View key="1">
            <View style={styles.p1}>
              <Text style={styles.tp1}>
                Street animals need our, protection. Help them today.
              </Text>
              <Image
                style={styles.i2}
                source={require('../../assets/image/dog.png')}></Image>
            </View>
          </View>
          <View key="2">
            <Text>Second page</Text>
          </View>
        </PagerView>
      </View>

      <View style={styles.category}>
      <View style={{paddingHorizontal: '3%', marginTop: '3%', marginBottom: '3%'}}>
        <Text style ={{fontSize: 20, fontWeight: '700', color: 'black'}}> Danh mục</Text>
      </View>
        <Block marginLeft={60} marginRight={50} row>
          <TouchableOpacity onPress={ ()=>navigation.navigate(PETS_SCREEN)}>
            <View style={styles.categories}>
              <MaterialIcons
                style={styles.icc}
                color={'white'}
                name="pets"
                size={30}
              />
            </View>
            <Text style={{marginLeft: '10%'}}>Thú cưng</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={ ()=>navigation.navigate(PRODUCTS_SCREEN)}>
            <View style={styles.categories}>
              <FontAwesome5
                style={styles.icc}
                color={'white'}
                name="shopping-cart"
                size={25}
              />
            </View>
            <Text style={{marginLeft: '10%'}}>Sản phẩm</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={ ()=>navigation.navigate(SERVICES_SCREEN)}>
            <View style={styles.categories}>
              <Ionicons
                style={styles.icc}
                color={'white'}
                name="time"
                size={30}
              />
            </View>
            <Text style={{marginLeft: '15%'}}>Dịch vụ</Text>
          </TouchableOpacity>
        </Block>
      </View>
      <View style={{paddingHorizontal: '5%', marginTop: '3%', marginBottom: '2%'}}>
        <Text style ={{fontSize: 20, fontWeight: '700', color: 'black'}}>Top bán chạy</Text>
      </View>

      <Block width={'100%'} paddingHorizontal={'2%'}>
        <FlatList  data={listRandom} renderItem={renderItem} numColumns={2} />
      </Block>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 5,
  },
  h2: {
    flexDirection: 'row',
    marginRight: 10,
  },
  h1: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  t1: {
    fontSize: 16,
    color: '#18A2E1',
  },
  t2: {
    fontSize: 22,
    color: 'black',
  },
  i1: {
    width: 40,
    height: 40,
  },
  pagerView: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    width: '90%',
    height: 200,
  },
  p1: {
    backgroundColor: '#18A2E1',
    borderRadius: 10,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  i2: {
    width: '50%',
    height: '100%',
  },
  tp1: {
    width: '50%',
    fontSize: 19,
    color: 'white',
    left: '10%',
    top: '10%',
  },
  ic: {
    top: '10%',
    right: '20%',
  },

  categories: {
    marginTop: '2%',
    width: 50,
    height: 50,
    backgroundColor: '#18A2E1',
    justifyContent: 'center',
    marginLeft: '15%',
    borderRadius: 5,
  },
  icc: {
    marginLeft: '20%',
  },
 
  category: {
    marginTop: '2%',
  },
  viewlist: {
    marginLeft: '15%',
    backgroundColor: '#E6EAED',
    width: 150,
    height: 168,
  },

  seachImage: {
    padding: 10,
    marginLeft: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ilist: {
    width: '100%',
      height: 150,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
  },
  
});
