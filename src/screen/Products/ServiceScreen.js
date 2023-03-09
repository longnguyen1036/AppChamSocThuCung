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
          marginLeft={'8%'}
          backgroundColor={'#E6EAED'}
          width={330}
          height={120}
          row={1}
          marginTop={10}>
          <Image style={styles.ilist} source={item.images}></Image>
          <Block
            paddingLeft={'5%'}
            margin={5}
            backgroundColor={'white'}
            height={110}
            width={220}>
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
    <Block>
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

      <Block>
        <FlatList key={DATA.name} data={DATA} renderItem={renderItem} />
      </Block>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Block
          marginLeft={50}
          width={350}
          height={720}
          backgroundColor={'white'}>
          <Block width={'100%'} height={30} backgroundColor={'#F2F3F2'}>
            <Text marginLeft={15} size={20}>
              Bộ lọc tìm kiếm
            </Text>
          </Block>

          <View marginTop={20}>
            <Text marginLeft={10}>Theo khoảng giá</Text>
            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={80}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>0 VND</Text>
              </Block>

              <Block
                marginLeft={50}
                padding={5}
                width={130}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>300000000 VND</Text>
              </Block>
            </Block>
          </View>

          <View marginTop={30}>
            <Text marginLeft={10}>Theo loại dịch vụ</Text>
            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Thú y</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Cắt tỉa</Text>
              </Block>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Tắm gội</Text>
              </Block>
            </Block>
            <Block
              marginLeft={20}
              padding={5}
              width={90}
              height={30}
              marginTop={10}
              backgroundColor={'#F2F3F2'}>
              <Text marginLeft={5}>Khách sạn</Text>
            </Block>
          </View>

          <View marginTop={30}>
            <Text marginLeft={10}>Theo giống</Text>

            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={25}>Chó</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={20}>Mèo</Text>
              </Block>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={10}>Hamster</Text>
              </Block>
            </Block>

            <Block marginTop={10} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={25}>Vẹt</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={20}>Khác</Text>
              </Block>
            </Block>
          </View>

          <View marginTop={30}>
            <Text marginLeft={10}>Theo khu vực</Text>

            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Tân Bình</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={5}>Bình Thạnh</Text>
              </Block>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Thủ Đức</Text>
              </Block>
            </Block>
            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Quận 1</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Quận 2 </Text>
              </Block>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Quận 3</Text>
              </Block>
            </Block>
            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>Quận 10</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={5}>Phú Nhuận</Text>
              </Block>
            </Block>
          </View>

          <Block marginTop={20} row={1} bottom={-100}>
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
              <Block
                marginLeft={20}
                width={130}
                height={50}
                backgroundColor={'white'}
                border={1}
                radius={5}
                borderColor={'#F80202'}
                alignCenter>
                <Text marginTop={12} size={18} color={'#F80202'}>
                  Trở về
                </Text>
              </Block>
            </TouchableOpacity>
            <Block
              marginLeft={20}
              width={130}
              height={50}
              backgroundColor={'#18A2E1'}
              radius={5}
              alignCenter>
              <Text marginTop={12} size={18} color={'white'}>
                Tìm kiếm
              </Text>
            </Block>
          </Block>
        </Block>
      </Modal>
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
