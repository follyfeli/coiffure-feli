/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect, useContext, useRef } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/AntDesign';
import { TestIds, BannerAd, BannerAdSize } from '@react-native-firebase/admob';
const { width, height } = Dimensions.get('window');
const Homescreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.top}>
        <Animatable.Text
          animation="fadeInDown"
          easing="ease-out"
          iterationCount="2"
          style={{
            color: '#FAA91D',
            fontFamily: 'Licorice-Regular',
            fontSize: 53,
            marginStart: width / 25,
            marginTop: height / 17,
          }}>
          styles...
        </Animatable.Text>
        <Image
          source={require('../Assets/images/bg.png')}
          resizeMode="cover"
          style={{ height: height / 5, width: width / 2 }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          marginTop: 30,
          marginHorizontal: 18,
        }}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('tresse')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/tresse.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Braide
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('dessin')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/dessin.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Design
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 5 }}>
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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('degrade')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/degra.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Degraded
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('dread')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/dread.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Dread
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 5 }}>
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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('stars')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/stars.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Stars
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('boucle')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/boucle.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Curly
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 5 }}>
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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('raie')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/raie.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Raie
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('long')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/long.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Long
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 5 }}>
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
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('dreadlocks')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/dreadlocks.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Dreadlocks
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('asiatique')}
            style={{
              margin: 4,
              backgroundColor: '#000',
              height: height / 3,
              width: width / 2.3,
            }}>
            <View>
              <Image
                source={require('../Assets/images/asiat.jpg')}
                resizeMode="cover"
                style={{ height: '100%', width: '100%' }}
              />
            </View>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#d3d3d3a0',
                height: height / 13,
                marginTop: height / 3.7,
              }}>
              <Text
                style={{
                  marginStart: 6,
                  fontWeight: 'bold',
                  fontSize: 19,
                  color: '#000',
                }}>
                Asian
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ margin: 5, marginBottom: 80 }}>
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    height: height,
  },
  top: {
    height: height / 5,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Homescreen;
