import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import AppHeader from '../../component/AppHeader';
import styles from './styles'
import JobComponent from '../../component/JobComponent';

const Job = () => {
  return (
    <View>
      <AppHeader title='İş İlanları' />
      <ScrollView>
        <View style={styles.container}>
          <TextInput style={[styles.flex, styles.searchInput]} placeholder='İş Ara...' />
        </View>

        <View style={styles.jobsContainer}>
          <JobComponent />
          <JobComponent />

          <JobComponent />

          <JobComponent />

        </View>
      </ScrollView>

    </View>
  )
}

export default Job