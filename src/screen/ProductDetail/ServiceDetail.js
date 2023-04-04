import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Switch,
  ScrollView,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {Button} from 'react-native';
import Block from '../../components/Block';

const ServiceDetail = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [modalVisible2, setModalVisible2] = useState(false);

  const DATA = [
    {
      id: 1,
      status: false,
      time: '10:00',
    },
    {
      id: 2,
      status: true,
      time: '10:30',
    },
    {
      id: 3,
      status: true,
      time: '12:00',
    },
    {
      id: 4,
      status: false,
      time: '14:30',
    },
    {
      id: 5,
      status: false,
      time: '17:00',
    },
    {
      id: 6,
      status: false,
      time: '18:30',
    },
    {
      id: 7,
      status: true,
      time: '20:00',
    },
  ];
  const renderItem = ({item}) => {
    return (
      <Block
        alignCenter
        margin={5}
        width={60}
        height={60}
        paddingVertical={15}
        backgroundColor={'#ECF2F8'}>
        <Text
          style={{
            fontSize: 18,
            color: item.status == false ? 'grey' : 'black',
          }}>
          {item.time}
        </Text>
      </Block>
    );
  };

  return (
    <ScrollView
      style={{backgroundColor: '#dcdcdc', height: '100%', width: '100%'}}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
            paddingVertical: '3%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5 name="chevron-left" size={30} color={'black'} />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5 name="heart" size={30} color={'black'} />
          </TouchableOpacity>
        </View>

        <View>
          <Image
            source={require('../../assets/image/detail3.png')}
            style={{borderRadius: 8}}></Image>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontSize: 24, fontWeight: '600'}}>Tỉa lông chó</Text>
        </View>

        <View
          style={{
            marginTop: '3%',
            flexDirection: 'row',
            width: '85%',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems: 'center',
            padding: 8,
            borderRadius: 8,
            borderWidth: 1,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                backgroundColor: '#18A2E1',
                padding: 5,
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/image/iconimg.png')}></Image>
            </View>

            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, color: 'black', fontWeight: '500'}}>
                matpetfamily
              </Text>
              <Text>Store</Text>
            </View>
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: '#18A2E1',
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              padding: 5,
              height: 40,
            }}>
            <FontAwesome5 name="comments" size={20} color={'white'} />
          </TouchableOpacity>
        </View>

        <View style={{width: '75%', flexDirection: 'row', marginTop: '3%'}}>
          <View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'black',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              150000đ
            </Text>
          </View>
          <View style={{marginLeft: '3%'}}>
            <Text style={{fontSize: 20, fontWeight: '700', color: '#F80202'}}>
              100000đ
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', width: '75%', marginTop: '2%'}}>
          <TouchableOpacity>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star" size={18} color={'#F80202'} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: '2%'}}>
            <Ionicons name="star-outline" size={18} color={'#F80202'} />
          </TouchableOpacity>
        </View>

        <View
          style={{width: '75%', alignContent: 'flex-start', marginTop: '2%'}}>
          <Text style={{fontSize: 18, fontWeight: '600'}}>Thời gian</Text>
        </View>

        <View
          style={{
            width: '75%',
            marginTop: '2%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Block
            alignCenter
            width={100}
            height={40}
            backgroundColor={'white'}
            paddingTop={'2%'}
            radius={5}>
            <Text style={{fontSize: 18, color: 'black'}}>{date.toLocaleDateString()}</Text>
          </Block>

          <TouchableOpacity style={{marginLeft: '30%'}} onPress={()=> setModalVisible2()}>
            <Block
              alignCenter
              width={100}
              height={40}
              backgroundColor={'white'}
              paddingTop={'7%'}
              radius={5}>
              <Text style={{fontSize: 18, color: 'black'}}>Chọn lịch</Text>
            </Block>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#18A2E1',
            borderRadius: 8,
            width: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2%',
            marginTop: '10%',
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Đặt lịch
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modalVisible2);
        }}>
        <View style={styles.modalView}>
          <FlatList numColumns={4} data={DATA} renderItem={renderItem} />

          <Block row margin={10}>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Text style={styles.textStyle}>Đồng ý</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose2]}
              onPress={() => setModalVisible2(!modalVisible2)}>
              <Text style={styles.textStyle}>Hủy</Text>
            </TouchableOpacity>
          </Block>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ServiceDetail;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineSwitchContainer: {
    marginTop: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inlineSwitchText: {
    fontSize: 18,
    marginRight: 8,
  },
  modalView: {
    margin: 30,
    marginTop: '60%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#52B4FF',
  },
  buttonClose: {
    backgroundColor: '#52B4FF',
    width: 100,
  },
  buttonClose2: {
    marginLeft: '10%',
    backgroundColor: 'grey',
    width: 100,
  },
  textStyle: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  hinh: {
    marginTop: 20,
    marginLeft: '5%',
    width: '100%',
    height: 350,
  },
});
