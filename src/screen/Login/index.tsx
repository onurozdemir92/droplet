import React from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Strings } from '../../theme/strings';
import styles from './styles'

const Login = () => {

  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.appName}>{Strings.appName}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput keyboardType='email-address' style={styles.input} placeholder='Email' />
        <TextInput secureTextEntry style={[styles.input, { marginTop: 20 }]} placeholder='Password' />

      </View>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <Text><Text>Bir Hesabın Yok Mu?</Text><TouchableOpacity><Text>Kayıt Ol</Text></TouchableOpacity></Text>
      </View>
    </SafeAreaView>
  );
};
export default Login;
