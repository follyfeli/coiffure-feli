/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Homescreen from './Screens/Homescreen';
import Tressescreen from './Screens/Tressescreen';
import DetailsScreen from './Screens/Detailsscreen';
import Assiatiquescreen from './Screens/Assiatiquescreen';
import Bouclescreen from './Screens/Bouclescreen';
import Degradescreen from './Screens/Degradescreen';
import Dessinsscreen from './Screens/Dessinsscreen';
import Dreadlocksscreen from './Screens/Dreadlocksscreen';
import Dreadsscreen from './Screens/Dreadscreen';
import longscreen from './Screens/longscreen';
import Raiescreen from './Screens/Raiescreen';
import Starsscreen from './Screens/Starsscreen';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homescreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="tresse"
          component={Tressescreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="asiatique"
          component={Assiatiquescreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="boucle"
          component={Bouclescreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="degrade"
          component={Degradescreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="dessin"
          component={Dessinsscreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="dreadlocks"
          component={Dreadlocksscreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="dread"
          component={Dreadsscreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="long"
          component={longscreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="raie"
          component={Raiescreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="stars"
          component={Starsscreen}
          options={{headerShown: null}}
        />
        <Stack.Screen
          name="details"
          component={DetailsScreen}
          options={{headerShown: null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
