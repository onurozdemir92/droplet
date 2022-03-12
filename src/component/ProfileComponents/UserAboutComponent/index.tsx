import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

const UserAboutComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hakkında</Text>
            <Text style={styles.text}>
                Merhaba, ben Onur mobil developer olarak sebit eğitim ve teknolojide çalışıyorum yarışmacı arkadaşlara başarılar dilerim everlomam bu kadar.
            </Text>
        </View>
    )
}

export default UserAboutComponent