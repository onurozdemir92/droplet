import React from 'react';
import { SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import index from '../SplashScreen';
import styles from './styles'

const Discovery = () => {

  const renderHeader = (title: string) => {
    return (
      <View style={styles.titleHeader}>
        <Text style={styles.titleText}># {title}</Text>
      </View>
    )
  }

  const renderListItem = (title: string, index: number) => {
    return (
      <TouchableOpacity style={styles.listItemContainer}>
        <View style={styles.indexContainer}><Text style={styles.indexText}>{index}</Text></View>
        <Text style={styles.listItemTitleText}>#{title}</Text>
        <Text style={styles.countText}>1,200</Text>
      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Ara' style={styles.input} />
      </View>
      <View style={styles.worldListContainer}>
        {renderHeader('Dünya')}
        <ScrollView style={styles.scroll}>
          {
            renderListItem('JavaScript', 1)
          }
          {
            renderListItem('C#', 2)
          }
          {
            renderListItem('Reactjs', 3)
          }
          {
            renderListItem('JavaScript', 4)
          }
        </ScrollView>
      </View>
      <View style={styles.localListContainer}>
        {renderHeader('Türkiye')}
        <ScrollView style={styles.scroll}>
          {
            renderListItem('JavaScript', 1)
          }
          {
            renderListItem('C#', 2)
          }
          {
            renderListItem('Reactjs', 3)
          }
          {
            renderListItem('JavaScript', 4)
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Discovery;
