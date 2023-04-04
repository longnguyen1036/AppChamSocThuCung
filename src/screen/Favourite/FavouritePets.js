import {
    StyleSheet,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
  } from 'react-native';
  import React from 'react';
  import Block from '../../components/Block';
  import Text from '../../components/Text';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import {FlatGrid} from 'react-native-super-grid';
  import {useState} from 'react';
  import {FAVOURITE_PETS_SCREEN, FAVOURITE_PRODUCTS_SCREEN, FAVOURITE_SERVICES_SCREEN, PRODUCTS_DETAIL_SCREEN} from '../../router/ScreenName';
  
  const FavouritePets = ({navigation}) => {
  
    const DATA = [
      {
        id: 1,
        name: 'BEAGLE CƯNG CƯNG',
        price: 1800000,
        images: require('./../../assets/image/dog.png'),
      },
      {
        id: 2,
        name: 'BEAGLE CƯNG CƯNG',
        price: 2000000,
        images: require('./../../assets/image/dog.png'),
      },
    ];
  
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.navigate(PRODUCTS_DETAIL_SCREEN)}>
          <Block
            marginLeft={'8%'}
            backgroundColor={'#E6EAED'}
            width={160}
            height={190}
            radius={10}>
            <Image style={styles.ilist} source={item.images}></Image>
            <Block
              paddingLeft={'5%'}
              margin={5}
              backgroundColor={'white'}
              height={70}
              width={150}
              radius={10}>
              <Block paddingTop={5}  >
                <Text>{item.name}</Text>
                <Text marginTop={17} size={12}>
                  {item.price} VND
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
              underlineColorAndroid="transparent"></TextInput>
          </Block>
        </Block>
        
  
        <Block width={'90%'}>
          <FlatGrid key={DATA.name} data={DATA} renderItem={renderItem} />
        </Block>
  
        
      </Block>
    );
  };
  
  export default FavouritePets;
  
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
  