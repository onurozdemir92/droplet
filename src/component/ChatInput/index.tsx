import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { Colors } from '../../theme'

const ChatInput = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Mesajınızı yazınız...' multiline style={styles.textInput} />
            <TouchableOpacity style={styles.sendButton}><Icon name='send' size={25} color={Colors.mainColor} /></TouchableOpacity>
        </View>
    )
}

export default ChatInput