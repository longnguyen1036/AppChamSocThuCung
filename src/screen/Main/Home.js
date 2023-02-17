import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import PagerView from 'react-native-pager-view';
import {FlatList} from 'react-native-gesture-handler';
import { FlatGrid } from 'react-native-super-grid';

const Home = () => {
  const DATA = [
    {
      id: 1,
      name: 'BEAGLE CƯNG CƯNG',
      category: 'Thú cưng',
      price: 1800000,
      images: require('./../../assets/image/dog.png'),
    },
    {
      id: 2,
      name: 'BEAGLE CƯNG CƯNG',
      category: 'Thú cưng',
      price: 2000000,
      images: require('./../../assets/image/dog.png'),
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.viewlist}>
      <Image style={styles.ilist} source={item.images}></Image>
      <View>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.category}</Text>
          <Text>{item.price}VND</Text>
        </View>
      </View>
    </View>
    )
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.h1}>
          <Text style={styles.t1}>Welcome to</Text>
          <Text style={styles.t2}>Home</Text>
        </View>
        <View style={styles.h2}>
          <FontAwesome5
            style={styles.ic}
            color={'black'}
            name="shopping-bag"
            size={25}
          />
          <Image
            style={styles.i1}
            source={require('../../assets/image/meo.png')}></Image>
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
        <Text style={styles.c1}>Danh mục</Text>
        <ScrollView showsHorizontalScrollIndicator={true}>
          <View>
            <View style={styles.categories}>
              <MaterialIcons
                style={styles.icc}
                color={'white'}
                name="pets"
                size={30}
              />
            </View>
            <Text style={{marginLeft: '8%'}}>Thú cưng</Text>
          </View>
          {/* <View >
            <View style={styles.categories}>
              <MaterialIcons
                style={styles.icc}
                color={'white'}
                name="pets"
                size={30}
              />
            </View>
            <Text style={{marginLeft: '8%'}}>Thú cưng</Text>
          </View> */}
        </ScrollView>
      </View>

      <View>
      <Text style={styles.c1}>Top bán chạy</Text>
        <FlatGrid key={DATA.name} 
        data={DATA} 
        renderItem={renderItem} />
      </View>
    </SafeAreaView>
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
    marginLeft: '10%',
    borderRadius: 5,
  },
  icc: {
    marginLeft: '20%',
  },
  c1: {
    color: '#172E4C',
    fontSize: 18,
    marginLeft: '5%',
  },
  category: {
    marginTop: '5%',
  },
  viewlist:{
    marginLeft: '10%',
    backgroundColor: '#E6EAED',
    width: 150,
    height: 168,
  },
   ilist:{
      width: 80,
      height: 90,
      marginLeft: '20%',
  },
});
