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
import { PETS_DETAIL_SCREEN } from '../../router/ScreenName';
import formatMoney from '../../components/FormatMoney';
import productApi from '../../api/productApi';

const PetScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listProduct, setListProduct] = useState([]);

  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);

  const getAllProducts = async () => {
      const res = await productApi.getAllProducts('petStore')
      // console.log('res nenene',res.data)
      setListProduct(res.data.data)
      setMasterDataSource(res.data.data);
  }

  useEffect(() => {
      getAllProducts();
  },[])

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.namePet
            ? item.namePet.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setListProduct(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setListProduct(masterDataSource);
      setSearch(text);
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity  onPress={ ()=>navigation.navigate(PETS_DETAIL_SCREEN,{
          _id : item._id
      })}>
       <Block
          marginLeft={'8%'}
          backgroundColor={'white'}
          width={160}
         marginTop={12}
          radius={10}
          >
          <Image style={styles.ilist} source={{uri: item.imgPet}}></Image>
          <Block
            paddingLeft={'5%'}
            padding={3}
            marginTop={8}
            height={70}
      
            >
            <Block width={140} paddingTop={5}>
              <Block width={'100%'} height={20} > 
              <Text bold>{item.namePet}</Text>
              </Block>
              <Block width={100} marginTop={10}>
                <Text color={'#18A2E1'} bold size={16}>
                  {formatMoney(item.pricePet)}
                </Text>
              </Block>
            </Block>
            
          </Block>
        </Block>
      </TouchableOpacity>
    );
  };

  return (
    <Block flex={1} backgroundColor={'#F2F3F2'} >
      <Block row={1} paddingVertical={10} paddingHorizontal={10}>
      <TouchableOpacity style={{width: '40%'}} onPress={() => navigation.goBack()}>
          
          <Image
            source={require('./../../assets/image/backpet.png')}
            style={{marginTop: 8}}></Image>
        
      </TouchableOpacity>
        <Block width={'50%'}>
          <Text size={20} color={'black'} bold>
            Thú cưng
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

      <Block width={'100%'} paddingHorizontal={'2%'} flex={1}>
        <FlatGrid key={listProduct._id} data={listProduct} renderItem={renderItem} />
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

          <View marginTop={20}>
            <Text marginLeft={10}>Theo giới tính</Text>
            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={80}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={20}>Đực</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={80}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={20}>Cái</Text>
              </Block>
            </Block>
          </View>

          <View marginTop={20}>
            <Text marginLeft={10}>Theo tuổi</Text>
            <Block marginTop={5} row={1}>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>3 tháng</Text>
              </Block>

              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>6 tháng</Text>
              </Block>
              <Block
                marginLeft={20}
                padding={5}
                width={90}
                height={30}
                backgroundColor={'#F2F3F2'}>
                <Text marginLeft={15}>9 tháng</Text>
              </Block>
            </Block>

            <Block
              marginTop={10}
              marginLeft={20}
              padding={5}
              width={90}
              height={30}
              backgroundColor={'#F2F3F2'}>
              <Text marginLeft={12}>12 tháng</Text>
            </Block>
          </View>

          <View marginTop={20}>
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

          <View marginTop={20}>
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

          <Block marginTop={20} row={1}>
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

export default PetScreen;

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
  
});
