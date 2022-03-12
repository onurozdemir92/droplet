import React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import AppHeader from '../../component/AppHeader';
import NowWorkComponent from '../../component/ProfileComponents/NowWorkComponent';
import UserAbilitiesComponent from '../../component/ProfileComponents/UserAbilitiesComponent';
import UserAboutComponent from '../../component/ProfileComponents/UserAboutComponent';
import UserEducationComponent from '../../component/ProfileComponents/UserEducationComponent';
import UserExperienceComponent from '../../component/ProfileComponents/UserExperienceComponent';
import UserInfoComponent from '../../component/ProfileComponents/UserInfoComponent';
import styles from './styles'

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title='Profile' />
      <ScrollView>
        <UserInfoComponent />
        <NowWorkComponent />
        <UserAboutComponent />
        <UserAbilitiesComponent />
        <UserExperienceComponent />
        <UserEducationComponent />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
