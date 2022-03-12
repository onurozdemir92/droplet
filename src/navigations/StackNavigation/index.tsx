import React from 'react';
import { StatusBar, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../../screen/Login';
import BottomNavigation from '../BottomNavigation';
import SplashScreen from '../../screen/SplashScreen';
import ChatScreen from '../../screen/Chat';
import ChatListScreen from '../../screen/ChatList';




export const Screens = {
    splashScreen: 'SplashScreen',
    bottomNavigation: 'BottomNavigation',
    login: 'Login',
    chat: 'Chat',
    chatList: 'ChatList',


}


const Stack = createStackNavigator();


const StackNavigation = () => {
    return (
        <>
            <StatusBar backgroundColor={'#607D8B'} barStyle="light-content" />
            <NavigationContainer>
                <Stack.Navigator headerMode="none" initialRouteName={Screens.splashScreen}>

                    <Stack.Screen name={Screens.splashScreen} component={SplashScreen} />
                    <Stack.Screen name={Screens.bottomNavigation} component={BottomNavigation} />
                    <Stack.Screen name={Screens.login} component={LoginScreen} />
                    <Stack.Screen name={Screens.chat} component={ChatScreen} />
                    <Stack.Screen name={Screens.chatList} component={ChatListScreen} />



                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default StackNavigation