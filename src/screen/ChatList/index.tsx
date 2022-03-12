import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import AppHeader from '../../component/AppHeader';
import ChatListItem from '../../component/ChatListItem';
import { Screens } from '../../navigations/StackNavigation';

const ChatList = () => {

  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <AppHeader goBack />
      <ScrollView>
        <ChatListItem onPress={() => navigation.navigate(Screens.chat)} />
        <ChatListItem />
        <ChatListItem />

      </ScrollView>
    </SafeAreaView>
  );
};

export default ChatList;
