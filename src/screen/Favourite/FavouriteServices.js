import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList,
  } from 'react-native';
  import React,{useState, useEffect, useCallback} from 'react';
  import Block from '../../components/Block';
  import Text from '../../components/Text';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {FlatGrid} from 'react-native-super-grid';
  import {FAVOURITE_PETS_SCREEN, FAVOURITE_SERVICES_SCREEN, SERVICES_DETAIL_SCREEN} from '../../router/ScreenName';
  import productApi from '../../api/productApi';
  import formatMoney from '../../components/FormatMoney';
import { useFocusEffect } from '@react-navigation/native';
  
  const FavouriteServices = ({navigation}) => {
    const [listfavorite, setListFavorite] = useState([])

    const [search, setSearch] = useState('');
    const [masterDataSource, setMasterDataSource] = useState([]);

  

    const getFavoritePets = async () => {
      const res = await productApi.getAllFavorite()
      setListFavorite(res.data.data.favoriteServiceId)
      setMasterDataSource(res.data.data.favoriteServiceId)
  }
  
  useFocusEffect(
    useCallback(() => {
      getFavoritePets()
    }, []),
  );
    const searchFilterFunction = (text) => {
      // Check if searched text is not blank
      if (text) {
        // Inserted text is not blank
        // Filter the masterDataSource
        // Update FilteredDataSource
        const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.nameService
              ? item.nameService.toUpperCase()
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
          onPress={() => navigation.navigate(SERVICES_DETAIL_SCREEN, {
            _id: item._id,
          })}>
          <Block
            marginLeft={'4%'}
            backgroundColor={'white'}
            width={'92%'}
            // height={130}
            row
            marginTop={10} 
            radius={10}
            // alignCenter
            padding={12}
            >
            <Image style={styles.ilist} source={{uri: item.imgService}}></Image>
            
              <Block marginLeft={'2%'} width={'74%'} >
                <Text numberOfLines={1} color={'#18A2E1'} size={18}>
                 Dịch vụ: {item.nameService}
                </Text>
                <Text  marginTop={4} size={16}>Giá: {formatMoney(item.priceService)}</Text>
                <Text numberOfLines={2} marginTop={4} size={14}>Mô tả: {item.descriptionService}</Text>
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
              onChangeText={(text) => searchFilterFunction(text)}
              value={search}
              underlineColorAndroid="transparent"></TextInput>
          </Block>
        </Block>
        <Block row justifyCenter>
      </Block>
  
      <Block width={'100%'} paddingHorizontal={'2%'}>
          <FlatList key={listfavorite._id} data={listfavorite} renderItem={renderItem} />
        </Block>
  
       
      </Block>
    );
  };
  
  export default FavouriteServices;
  
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
      width: 90,
      height: 100,
      borderRadius: 6,
      
    },
    
  });
  