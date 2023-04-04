import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import React from 'react';
import Block from '../../components/Block';
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {FlatGrid} from 'react-native-super-grid';
import {useState} from 'react';
import {SERVICES_DETAIL_SCREEN} from '../../router/ScreenName';

const ServiceScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const DATA = [
    {
      id: 1,
      name: 'Tỉa lông chó',
      price: 1800000 + ' VND',
      sale: 1500000,
      images: require('./../../assets/image/dog.png'),
      store: 'Petmart',
      address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình',
    },
    {
      id: 2,
      name: 'BEAGLE CƯNG CƯNG',
      price: 2000000 + ' VND',
      sale: 1500000,
      images: require('./../../assets/image/dog.png'),
      store: 'Petmart',
      address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình',
    },
    {
      id: 3,
      name: 'BEAGLE CƯNG CƯNG',
      price: '',
      sale: 1500000,
      images: require('./../../assets/image/dog.png'),
      store: 'Petmart',
      address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(SERVICES_DETAIL_SCREEN)}>
        <Block
          marginLeft={'5%'}
          backgroundColor={'#E6EAED'}
          width={350}
          height={130}
          row={1}
          marginTop={10} 
          radius={10}>
          <Image style={styles.ilist} source={item.images}></Image>
          <Block
            paddingLeft={'5%'}
            margin={5}
            backgroundColor={'white'}
            height={120}
            width={240}
            radius={10}>
            <Block paddingTop={5}>
              <Text>{item.name}</Text>
              <Text color={'red'} size={12}>
                {item.sale}
              </Text>
              <Text size={12}>{item.price}</Text>
              <Text size={12}>Cửa hàng{item.store}</Text>
              <Text size={12}> Địa chỉ:{item.address}</Text>
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
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
        <TouchableOpacity
          style={{width: '40%'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        </TouchableOpacity>
        <Block width={'50%'}>
          <Text size={20} color={'black'} bold>
            Dịch vụ
          </Text>
        </Block>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign name="bars" size={25} />
        </TouchableOpacity>
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

      <Block >
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
      </Block>

      
    </Block>
  );
};

export default ServiceScreen;

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
