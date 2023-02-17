import {StyleSheet, Text, View, SafeAreaView, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.h1}>
          <Text style={styles.t1}>Welcome to</Text>
          <Text style={styles.t2}>Home</Text>
        </View>
        <View style={styles.h2}>
          <Ionicons color={'#18A2E1'} name="radio-button-on" size={20} />
          <Image style={styles.i1} source={require('../../assets/image/meo.png')}></Image>
        </View>
      </View>
      <View  style={styles.banner}>
      <Image style={styles.i2} source={require('../../assets/image/dog.png')}></Image>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginTop: 5,
    },
    h2: {
        flexDirection: 'row',
        marginRight: 10
    },
    h1: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    t1: {
        fontSize: 16,
        color: '#18A2E1',
    },
    t2: {
        fontSize: 22,
        color: 'black',
    },
    i1: {
        width: 40,
        height: 40
    }
});
