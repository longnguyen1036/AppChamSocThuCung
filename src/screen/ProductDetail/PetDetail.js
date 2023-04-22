import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {PROFILE_SHOP_SCREEN} from '../../router/ScreenName';

const PetDetail = ({navigation}) => {
  const [ItemsImage, setItemsImage] = useState([
    {key: 1, image: require('../../assets/image/detail1.png')},
    {key: 2, image: require('../../assets/image/detail2.png')},
    {key: 3, image: require('../../assets/image/detail1.png')},
    {key: 4, image: require('../../assets/image/detail2.png')},
  ]);

  const [selectedImage, setSelectedImage] = useState(
    require('../../assets/image/detail1.png'),
  );

  return (
    <View style={{backgroundColor: '#dcdcdc', height: '100%'}}>
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
            source={selectedImage}
            style={{width: 200, height: 200, borderRadius: 8}}></Image>
        </View>

        <ScrollView style={{width: '66%'}} horizontal={true}>
          {ItemsImage.map(object => {
            return (
              <TouchableOpacity
                onPress={() => setSelectedImage(object.image)}
                key={object.key}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: 8,
                }}>
                <Image source={object.image}></Image>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View>
          <View style={{marginTop: '3%', width: '73%'}}>
            <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
              BEAGLE CƯNG CƯNG
            </Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>700.000đ</Text>
            <Text style={{fontSize: 17, color: 'black', fontWeight: '600'}}>
              Tình trạng: Còn hàng
            </Text>
          </View>
          <View style={{flexDirection: 'row', width: '73%', marginTop: '3%'}}>
            <TouchableOpacity
              style={{backgroundColor: 'white', padding: 8, borderRadius: 8}}>
              <Text style={{fontSize: 10,}}>
                Gioi tinh
              </Text>
              <Text style={{textAlign: 'center',fontSize: 12, color: 'black', fontWeight: '700'}}>Cái</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginLeft: '5%',
                padding: 8,
                borderRadius: 8,
                width: 55,
                height: 55,
              }}>
              <Text style={{fontSize: 10,}}>
                Tuoi
              </Text>
              <Text style={{textAlign: 'center',fontSize: 12, color: 'black', fontWeight: '700'}}>6 th</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginLeft: '5%',
                padding: 8,
                borderRadius: 8,
                width: 55,
                height: 55,
              }}>
              <Text style={{fontSize: 9,}}>
                Can nang
              </Text>
              <Text style={{textAlign: 'center',fontSize: 12, color: 'black', fontWeight: '700'}}>4,7kg</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                marginLeft: '5%',
                padding: 8,
                borderRadius: 8,
                width: 55,
                height: 55,
              }}>
              <Text style={{fontSize: 10,}} >
                Giong
              </Text>
              <Text style={{textAlign: 'center', fontSize: 12, color: 'black', fontWeight: '700'}}>Mèo</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(PROFILE_SHOP_SCREEN)}
          style={{
            marginTop: '5%',
            flexDirection: 'row',
            width: '80%',
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
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            marginTop: '5%',
            backgroundColor: '#18A2E1',
            padding: '3%',
            borderRadius: 8,
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Thêm vào giỏ hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PetDetail;

const styles = StyleSheet.create({});