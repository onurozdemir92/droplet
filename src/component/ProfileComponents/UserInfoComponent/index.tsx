import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
const UserInfoComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.profileImageContainer}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' }} style={styles.profileImage} />
            </View>
            <View style={styles.userNamesContainer}>
                <Text>ulderth</Text>
                <Text>Onur Rahmi ÖZDEMİR</Text>
                <Text>React Native Developer</Text>
            </View>
            <View style={styles.countsContainer}>
                <View style={styles.countsItemContainer}>
                    <Text>Takipçi</Text>
                    <Text>20 B</Text>

                </View>
                <View style={styles.countsItemContainer}>
                    <Text>Star</Text>
                    <Text>500</Text>
                </View>
                <View style={styles.countsItemContainer}>
                    <Text>Beğeni</Text>
                    <Text>1 M</Text>
                </View>
            </View>
        </View>
    )
}

export default UserInfoComponent