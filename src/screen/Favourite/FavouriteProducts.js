import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const FavouriteProducts = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Favourite</Text>
    </View>
  )
}

export default FavouriteProducts

const styles = StyleSheet.create({})