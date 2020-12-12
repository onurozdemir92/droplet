import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

import HomeScreen from '../../screen/Home';
import DiscoveryScreen from '../../screen/Discovery';
import ProfileScreen from '../../screen/Profile';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#607D8B',
        showLabel: false,
        inactiveTintColor: '#b3bac2',
        style: {
          backgroundColor: '#fff',
          borderWidth: 0,
          borderTopWidth: 0,
          borderTopColor: 'white',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: (tintColor) => (
            <>
              <Entypo name="home" size={tintColor.size} color={'black'} />
              {tintColor.focused == true ? (
                <Octicons
                  name="primitive-dot"
                  size={10}
                  color={tintColor.color}
                />
              ) : null}
            </>
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: (tintColor: any) => (
            <>
              <Ionicons name="search" size={tintColor.size} color={'black'} />
              {tintColor.focused == true ? (
                <Octicons
                  name="primitive-dot"
                  size={10}
                  color={tintColor.color}
                />
              ) : null}
            </>
          ),
        }}
        name="Discovery"
        component={DiscoveryScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: '',
          tabBarIcon: (tintColor) => (
            <>
              <Entypo name="laptop" size={tintColor.size} color={'black'} />
              {tintColor.focused == true ? (
                <Octicons
                  name="primitive-dot"
                  size={10}
                  color={tintColor.color}
                />
              ) : null}
            </>
          ),
        }}
        name="Freelancer"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Hello Word',
          tabBarIcon: (tintColor) => (
            <>
              <Ionicons name="person" size={tintColor.size} color={'black'} />
              {tintColor.focused == true ? (
                <Octicons
                  name="primitive-dot"
                  size={10}
                  color={tintColor.color}
                />
              ) : null}
            </>
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
