import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const NowWorkComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Şuan Çalışıyor</Text>
            <View style={styles.companyContainer}>
                <View style={styles.companyLogoContainer}>
                    <Image source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D0BAQFHesz2C8nQZw/company-logo_100_100/0/1643211493288?e=1655337600&v=beta&t=MSuHbQcX9vdycC3emUOSg6KwJOfXHhrbSRNGXY841qM' }} style={styles.companyLogo} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.positionTitle}>React Native Developer</Text>
                    <Text style={styles.companyName}>Sebit Information & Education Technologies Inc.</Text>
                    <Text style={styles.workType}>Tam Zamanlı</Text>
                    <Text style={styles.workStartTime}>Agu 2021</Text>
                    <Text style={styles.location}>Ankara, Türkiye</Text>
                </View>
            </View>
        </View>
    )
}

export default NowWorkComponent