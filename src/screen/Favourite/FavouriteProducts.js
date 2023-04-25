import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React,{useState, useEffect} from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatGrid} from 'react-native-super-grid';
import {
  FAVOURITE_PETS_SCREEN,
  FAVOURITE_SERVICES_SCREEN,
  PRODUCTS_DETAIL_SCREEN,
} from '../../router/ScreenName';
import productApi from '../../api/productApi';
import formatMoney from '../../components/FormatMoney';

const FavouriteProducts = ({navigation}) => {
  const [listfavorite, setListFavorite] = useState([])
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  

  const getFavoritePets = async () => {
    const res = await productApi.getAllFavorite()
    setListFavorite(res.data.data.favoriteProductId)
    setMasterDataSource(res.data.data.favoriteProductId)
}

  useEffect(() => {
    getFavoritePets()
  },[])

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.nameProduct
            ? item.nameProduct.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setListFavorite(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setListFavorite(masterDataSource);
      setSearch(text);
    }
  };

  const renderItem = ({item}) => {
    // console.log('item', item)
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTS_DETAIL_SCREEN)}>
        <Block
          marginLeft={'8%'}
          backgroundColor={'#E6EAED'}
          width={160}
          height={190}
          radius={10}>
          <Image style={styles.ilist} source={{uri: item.imgProduct}}></Image>
          <Block
            paddingLeft={'5%'}
            margin={5}
            backgroundColor={'white'}
            height={70}
            width={150}
            radius={10}>
            <Block paddingTop={5}>
              <Text>{item.nameProduct}</Text>
              <Text marginTop={17} size={12}>
                {formatMoney(item.priceProduct)} 
              </Text>
            </Block>
            <TouchableOpacity style={styles.nut}>
              <AntDesign name="right" size={25} />
            </TouchableOpacity>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block backgroundColor={'white'} flex={1}>

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
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"></TextInput>
        </Block>
      </Block>
      

      <Block width={'90%'}>
      <FlatGrid key={listfavorite._id} data={listfavorite} renderItem={renderItem} />
      </Block>
    </Block>
  );
};

export default FavouriteProducts;

const styles = StyleSheet.create({
  seachImage: {
    padding: 10,
    marginLeft: 10,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  ilist: {
    width: 100,
    height: 110,
    marginLeft: '18%',
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
});
