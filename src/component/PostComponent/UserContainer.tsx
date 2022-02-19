import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../theme'

const UserContainer = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.avatar} source={{ uri: 'https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' }} />
            <View style={styles.TitleContainer}>
                <Text><Text style={styles.name}>Onur Rahmi ÖZDEMİR - </Text><Text style={styles.userName}>ulderth</Text></Text>
                <Text style={styles.userName}>React Native Developer</Text>

            </View>
        </View>
    )
}

export default UserContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginVertical: 5,
        marginLeft: 5
    },
    TitleContainer: {
        flex: 1,
        marginLeft: 5,
        justifyContent: 'center'
    },
    name: {
        fontWeight: 'bold',
        fontSize: 12,
        color: Colors.name
    },
    userName: {
        fontWeight: 'bold',
        color: Colors.userName,
        fontSize: 11
    }

})