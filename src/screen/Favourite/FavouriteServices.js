import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    FlatList,
  } from 'react-native';
  import React,{useState, useEffect} from 'react';
  import Block from '../../components/Block';
  import Text from '../../components/Text';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {FlatGrid} from 'react-native-super-grid';
  import {FAVOURITE_PETS_SCREEN, FAVOURITE_SERVICES_SCREEN, SERVICES_DETAIL_SCREEN} from '../../router/ScreenName';
  import productApi from '../../api/productApi';
  import formatMoney from '../../components/FormatMoney';
  
  const FavouriteServices = ({navigation}) => {
    const [listfavorite, setListFavorite] = useState([])

    const [search, setSearch] = useState('');
    const [masterDataSource, setMasterDataSource] = useState([]);

  

    const getFavoritePets = async () => {
      const res = await productApi.getAllFavorite()
      setListFavorite(res.data.data.favoriteServiceId)
      setMasterDataSource(res.data.data.favoriteServiceId)
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
          onPress={() => navigation.navigate(SERVICES_DETAIL_SCREEN)}>
          <Block
            marginLeft={'5%'}
            backgroundColor={'#E6EAED'}
            width={'92%'}
            height={130}
            row={1}
            marginTop={10} 
            radius={10}>
            <Image style={styles.ilist} source={{uri: item.imgService}}></Image>
            <Block
              paddingLeft={'5%'}
              margin={5}
              backgroundColor={'white'}
              height={120}
              width={'71%'}
              radius={10}>
              <Block paddingTop={5}>
                <Text>{item.name}</Text>
                <Text color={'red'} size={12}>
                 Dịch vụ: {item.nameService}
                </Text>
                <Text size={12}>Giá: {formatMoney(item.priceService)}</Text>
                <Text size={12}> Mô tả: {item.descriptionService}</Text>
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
        <Block row justifyCenter>
      </Block>
  
        <Block>
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
      marginLeft: '2%',
      marginTop: '2%',
    },
    nut: {
      width: 32,
      height: 32,
      backgroundColor: '#F2F3F2',
      position: 'absolute',
      right: '5%',
      top: '10%',
      alignItems: 'center',
      borderRadius: 4,
      paddingTop: '15%',
    },
  });
  