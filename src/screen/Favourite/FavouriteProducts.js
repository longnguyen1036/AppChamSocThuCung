import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
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
import {useFocusEffect} from '@react-navigation/native';

const FavouriteProducts = ({navigation}) => {
  const [listfavorite, setListFavorite] = useState([]);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const getFavoritePets = async () => {
    const res = await productApi.getAllFavorite();
    setListFavorite(res.data.data.favoriteProductId);
    setMasterDataSource(res.data.data.favoriteProductId);
  };

  useFocusEffect(
    useCallback(() => {
      getFavoritePets();
    }, []),
  );

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
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
        onPress={() =>
          navigation.navigate(PRODUCTS_DETAIL_SCREEN, {
            _id: item._id,
          })
        }>
        <Block
          marginLeft={'8%'}
          backgroundColor={'white'}
          width={160}
         marginTop={12}
          radius={10}
          >
          <Image style={styles.ilist} source={{uri: item.imgProduct}}></Image>
          <Block
            paddingLeft={'5%'}
            // margin={5}
            padding={3}
            marginTop={8}
            // backgroundColor={'blue'}
            height={70}
            // width={150}
            // radius={10}
            >
            <Block width={140} paddingTop={5}>
              <Block width={'100%'} height={20} > 
              <Text bold>{item.nameProduct}</Text>
              </Block>
              <Block width={100} marginTop={10}>
                <Text color={'#18A2E1'} bold size={16}>
                  {formatMoney(item.priceProduct)}
                </Text>
              </Block>
            </Block>
            {/* <TouchableOpacity style={styles.nut}>
              <AntDesign name="right" size={25} />
            </TouchableOpacity> */}
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block backgroundColor={'#F2F3F2'} flex={1}>
      <Block paddingHorizontal={10}>
        <Block
          row={1}
          justifyCenter
          alignCenter
          backgroundColor={'white'}
          height={40}
          borderRadius={15}
          margin={10}>
          <Image
            source={require('./../../assets/image/timkiempet.png')}
            style={styles.seachImage}></Image>
          <TextInput
            placeholder="Tìm kiếm"
            style={{flex: 1}}
            onChangeText={text => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"></TextInput>
        </Block>
      </Block>

      <Block width={'100%'} paddingHorizontal={'2%'}>
        <FlatGrid
          key={listfavorite._id}
          data={listfavorite}
          renderItem={renderItem}
        />
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
    width: '100%',
    height: 150,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
