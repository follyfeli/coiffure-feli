import React, { useState, useEffect, useContext, useRef } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Linking,
  FlatList,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
import Share from 'react-native-share';
import { captureRef } from 'react-native-view-shot';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DetailsScreen = ({ route, navigation }) => {


  const itemData = route.params.itemData;

  const viewRef = useRef();

  const shareImage = async () => {
    try {
      const uri = await captureRef(viewRef, {
        format: 'png',
        quality: 0.8,
      });
      console.log('uri', uri);

      const shareResponse = await Share.open({
        url: uri,
        message: `Find more on https://play.google.com/store/apps/details?id=com.style_afro_hairstyle`,
      });
      console.log('shareResponse', shareResponse);
    } catch (error) {
      console.log('error', error);
    }
  };




  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={{
          backgroundColor: '#FFF',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 40,
            justifyContent: 'space-between'
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: 15 }}>
            <Entypo name="reply-all" size={30} color="#33B9F0" />
          </TouchableOpacity>
          <TouchableOpacity onPress={shareImage} style={{ padding: 15 }}>
            <Entypo name="share-alternative" size={30} color="#33B9F0" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image ref={viewRef}
          source={{ uri: itemData.image }}
          style={{ height: height / 1.8, width: width }}
          resizeMode="contain"
        />
      </View>
      <View style={{ marginTop: 16, marginLeft: 7, marginRight: 10 }}>
        <BannerAd
          unitId='ca-app-pub-5352419258411459/3831522547'
          size={'400x200'}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
          onAdLoaded={() => {
            console.log('Advert loaded');
          }}
          onAdFailedToLoad={error => {
            console.error('Advert failed to load: ', error);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderWidth: 0,
    borderTopWidth: 0,
  },
  slide: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});

export default DetailsScreen;
