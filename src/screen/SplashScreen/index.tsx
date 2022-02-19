import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { useNavigation } from '@react-navigation/native'
import { Screens } from '../../navigations/StackNavigation'

const index = () => {

    const navigation = useNavigation()

    useEffect(() => {

        setTimeout(() => {
            navigation.navigate(Screens.bottomNavigation)
        }, 1000);
    }, [])

    return (

        <View style={styles.container}>
            <Text style={styles.appName}>Devloide</Text>
        </View>
        
    )
}

export default index