import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Card = ({ itemData, onDelete, onPress }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <TouchableOpacity onPress={onPress}>
      <Animatable.View animation="fadeInRight">
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{ uri: itemData.image }}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
        </View>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    height: height / 4,
    marginVertical: 6,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 20,
    marginBottom: 30,
    zIndex: 1,
    width: width / 2,
  },
  cardImgWrapper: {},
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
  },
  cardInfo: {
    padding: 1,
    borderColor: '#ccc',
    borderWidth: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f0f8ff',
    width: 150,
    alignSelf: 'center',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 18,
    color: '#ff0000',
    marginStart: 50,
  },
  cardContact: {
    fontWeight: 'bold',
    marginLeft: '10%',
  },
});
