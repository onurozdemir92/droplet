import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'

const JobComponent = () => {
    return (
        <TouchableOpacity activeOpacity={.7} style={styles.container}>
            <View style={styles.logoContainer}>
                <Image resizeMode='contain' source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D0BAQEHeLXuqe6R_w/company-logo_100_100/0/1519903700369?e=1655337600&v=beta&t=_3DKhJCjBclStKGBDpjrCpkoh7r2j7VWy5e4zWhX2Og' }} style={styles.logo} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.title}>React Native Developer</Text>
                <Text style={styles.companyName}>Devizy</Text>
                <Text style={styles.Location}>İstanbul, Türkiye</Text>
                <Text style={styles.wage}>7,500 - 10,000 tl</Text>
                <Text><Text style={styles.titleTime}>1 Gün Önce -</Text><Text style={styles.recourse}> 20 Başvuru</Text></Text>
            </View>
        </TouchableOpacity>
    )
}

export default JobComponent