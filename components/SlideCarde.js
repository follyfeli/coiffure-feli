import React, { useContext, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler'
import firestore from '@react-native-firebase/firestore';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const SlideCard = ({ itemData, onDelete, onPress }) => {

  const { width, height } = Dimensions.get('window')

  useEffect(() => {
    const numOfBackground = 5;
    let scrollValue = 0,
      scrolled = 0;
    setInterval(function () {
      scrolled++;
      if (scrolled < numOfBackground) scrollValue = scrollValue + width;
      else {
        scrollValue = 0;
        scrolled = 0;
      }
      _scrollView.scrollTo({ x: scrollValue, animated: false });
    }, 1000);
  }, []);

  return (

    <ScrollView
      ref={scrollView => {
        _scrollView = scrollView;
      }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginTop: 35 }}>
      <Image
        source={{ uri: itemData.image }}
        style={{ height: height / 2, width, }}
        resizeMode='contain'
      ></Image>
      <Image
        source={{ uri: itemData.image2 }}
        style={{ height: height / 2, width }}
        resizeMode='contain'
      ></Image>
      <Image
        source={{ uri: itemData.image3 }}
        style={{ height: height / 2, width }}
        resizeMode='contain'
      ></Image>
    </ScrollView>


  );
};

export default SlideCard;

const styles = StyleSheet.create({
  card: {
    height: 150,
    marginVertical: 10,
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginTop: 20,
    marginBottom: 80,
    zIndex: 1,
    width: width / 2
  },
  cardImgWrapper: {

  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  cardInfo: {
    padding: 1,
    borderColor: '#ccc',
    borderWidth: 0,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#f0f8ff',
    width: 150,
    alignSelf: 'center'
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 18,
    color: '#ff0000',
    marginStart: 50
  },
  cardContact: {
    fontWeight: 'bold',
    marginLeft: "10%",
  },
});
