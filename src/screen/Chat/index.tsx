import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import AppHeader from '../../component/AppHeader';
import ChatInput from '../../component/ChatInput';

const Chat = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppHeader goBack />
      <View style={{ flex: 1 }}>

      </View>
      <ChatInput />
    </SafeAreaView>
  );
};

export default Chat;
