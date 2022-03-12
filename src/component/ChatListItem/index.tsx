import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import UserContainer from '../PostComponent/UserContainer'
import styles from './styles'
const ChatListItem = ({ onPress }: ChatListItemProps) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={.7} style={styles.container}>
            <UserContainer />
        </TouchableOpacity>
    )
}

interface ChatListItemProps {
    onPress?: () => void;
}

export default ChatListItem