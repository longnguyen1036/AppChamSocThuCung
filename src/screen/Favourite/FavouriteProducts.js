import { StyleSheet, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, {useState} from 'react'
import Block from '../../components/Block'
import Text from '../../components/Text';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';
const DATA1 = [
  {
    id: 1,
    name: 'Tỉa lông chó',
    price: 1800000 + ' VND',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
  {
    id: 2,
    name: 'BEAGLE CƯNG CƯNG',
    price: 2000000 + ' VND',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
  {
    id: 3,
    name: 'BEAGLE CƯNG CƯNG',
    price: '',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
  {
    id: 4,
    name: 'BEAGLE CƯNG CƯNG',
    price: '',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
  {
    id: 5,
    name: 'BEAGLE CƯNG CƯNG',
    price: '',
    sale: 1500000,
    images: require('../../assets/image/dog.png'),
    store: 'Petmart',
    address: '147/10 Nguyễn Sỹ Sách p15 Tân Bình'
  },
];

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Sản phẩm',
    image: require("../../assets/image/profileavatar.png"),
    price: 72,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Dịch vụ',
    image: require("../../assets/image/profileavatar.png"),
    price: 20,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Thú cưng',
    image: require("../../assets/image/profileavatar.png"),
    price: 39,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Thú cưng',
    image: require("../../assets/image/profileavatar.png"),
    price: 39,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Thú cưng',
    image: require("../../assets/image/profileavatar.png"),
    price: 39,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d87',
    title: 'Thú cưng',
    image: require("../../assets/image/profileavatar.png"),
    price: 39,
  },
];

const FavouriteProducts = () => {
  // const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <ScrollView>
        <Block row={1} paddingVertical={15} paddingHorizontal={10}>
          <Block width={'40%'}>
            <Image
              source={require('../../assets/image/backpet.png')}
              style={{marginTop: 8}}></Image>
          </Block>
          <Block width={'50%'}>
            <Text size={20} color={'black'} bold>
                Yêu thích
            </Text>
          </Block>
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

      <ScrollView horizontal = {true} style={{marginTop: 10, paddingHorizontal: 45, }}>
            {DATA.map((category, index) => (
              <TouchableOpacity
                style={{ marginRight: 20 , marginTop: 10}}
                key={index}
                onPress={() => setActiveCategory(index)}
              >
                <Text
                  style={[
                    {
                      fontSize: 18,
                      fontWeight: "600",
                      color: 'gray',
                    },
                    activeCategory === index && {
                      color: 'black',
                      fontWeight: "700",
                      fontSize: 18.5,
                    },
                  ]}
                >
                  {category.title}
                </Text>
              </TouchableOpacity>
            ))}
      </ScrollView>

      {activeCategory == 0 ?  <ScrollView decelerationRate={0.5} style={{marginTop: -70}} contentContainerStyle={{flexWrap: 'wrap', height: '70%', paddingHorizontal: 10}} >
            {DATA.map((category, index) => (
              <Block
              marginLeft={'8%'}
              backgroundColor={'#E6EAED'}
              width={150}
              height={168}
              marginTop={15}
              radius={8}
              key={index}>
                <Image style={styles.ilist1} source={category.image}></Image>
                <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={70}>
                  <Block paddingTop={5}>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>{category.title}</Text>
                    <Text style={{marginTop: 7, fontSize: 12}}>{category.price} VND</Text>
                  </Block>
                  <TouchableOpacity style={styles.nut}>
                    <AntDesign name="right" size={25} />
                  </TouchableOpacity>
                </Block>
              </Block>



            ))}
        </ScrollView> : activeCategory == 1 ? <ScrollView  style={{marginTop: -5}}>
            {DATA1.map((item, index) => (
              // <TouchableOpacity
              //   style={{ marginRight: 20 , marginTop: 10, flexDirection: 'row', backgroundColor: 'aquamarine',
              // justifyContent: 'space-around', borderRadius: 8}}
              //   key={index}
                
              // >
              //   <Image source={category.image}/>
              //   <View>
              //     <Text>
              //       {category.title}
              //     </Text>
              //     <Text>
              //       {category.price}
              //     </Text>
              //   </View>
                
              // </TouchableOpacity>

              <Block
                marginLeft={'5%'}
                backgroundColor={'#E6EAED'}
                width={370}
                height={120} 
                row={1}
                marginTop={10}
                radius={8}
                key={index}>
                <Image style={styles.ilist} source={item.images}></Image>
                <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={110} width={250}>
                  <Block paddingTop={5}>
                    <Text>{item.name}</Text>
                    <Text style= {{color: 'red', fontSize: 12}}>{item.sale}</Text>
                    <Text style={{fontSize: 12}} >{item.price}</Text>
                    <Text style={{fontSize: 12}}>Cửa hàng{item.store}</Text>
                    <Text style={{fontSize: 12}}> Địa chỉ:{item.address}</Text>
                  
                  </Block>
                  <TouchableOpacity style={styles.nut}>
                    <AntDesign name="right" size={25} />
                  </TouchableOpacity>
                </Block>
              </Block>



            ))}
        </ScrollView> : activeCategory == 2 ? <ScrollView decelerationRate={0.5} style={{marginTop: -70}} contentContainerStyle={{flexWrap: 'wrap', height: '70%', paddingHorizontal: 10}}>
            {DATA.map((category, index) => (
              <Block
              marginLeft={'8%'}
              backgroundColor={'#E6EAED'}
              width={150}
              height={168}
              marginTop={15}
              key={index}>
                <Image style={styles.ilist1} source={category.image}></Image>
                <Block paddingLeft={'5%'} margin={5} backgroundColor={'white'} height={70}>
                  <Block paddingTop={5}>
                    <Text style={{fontSize: 18, fontWeight: '700'}}>{category.title}</Text>
                    <Text style={{marginTop: 7, fontSize: 12}}>{category.price} VND</Text>
                  </Block>
                  <TouchableOpacity style={styles.nut}>
                    <AntDesign name="right" size={25} />
                  </TouchableOpacity>
                </Block>
              </Block>
            ))}
        </ScrollView>: null}
      
    </ScrollView>
  )
}

export default FavouriteProducts

const styles = StyleSheet.create({
  ilist: {
    width: 80,
    height: 90,
    marginLeft: '5%',
  },
  ilist1: {
    width: 80,
    height: 90,
    marginLeft: '20%',
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
})