import React, { useState, useEffect, useContext } from 'react';
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
  Button,
  Dimensions,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import Card from '../components/Card';
import {
  InterstitialAd,
  AdEventType,
  TestIds,
} from '@react-native-firebase/admob';
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height / 3;

const Dreadsscreen = ({ navigation, item, route }) => {
  const [dread, setdread] = useState(null);
  const [loading, setloading] = useState(true);
  const [search, setSearch] = useState('');
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchdread = async () => {
      try {
        const list = [];
        await firestore()
          .collection('dread')
          .get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const { image } = doc.data();
              list.push({
                id: doc.id,
                image: image,
              });
            });
          });
        setdread(list);
        if (loading) {
          setloading(false);
        }
        console.log('dread:', dread);
      } catch (e) {
        console.log(e);
      }
    };

    fetchdread();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <Card
        itemData={item}
        onPress={() => {
          navigation.navigate('details', { itemData: item })
        }}
      />
    );
  };

  const renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#fff',
          marginLeft: '5%',
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="transparent"
      />
      <View style={styles.top}></View>
      <View >
        <BannerAd
          unitId='ca-app-pub-5352419258411459/3831522547'
          size={BannerAdSize.SMART_BANNER}
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
      <View>
        <FlatList
          data={dread}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={renderSeparator}
          style={{ marginBottom: 150 }}
          ItemSeparatorComponent={renderSeparator}
          columnWrapperStyle={{ flexWrap: 'wrap', flex: 1 }}
          numColumns={2}
          horizontal={false}
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
  top: {
    height: height / 3,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#fff234',
    borderBottomWidth: 2,
  },
});

export default Dreadsscreen;
