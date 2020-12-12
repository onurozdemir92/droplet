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
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screen/Login';
import BottomNavigation from './src/component/BottomNavigation';

const Stack = createStackNavigator();
const App: () => React$Node = () => {
  return (
    <>
      <StatusBar backgroundColor={'#607D8B'} barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />

          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
