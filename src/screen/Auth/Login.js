import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { REGISTER_SCREEN } from '../../router/ScreenName';

const Login = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(REGISTER_SCREEN);
        }}>
        <Text>LO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
