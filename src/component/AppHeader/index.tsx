import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import styles from './styles'
import { Colors } from '../../theme';
import { useNavigation } from '@react-navigation/native';

const AppHeader = ({ goBack, title }: AppHeaderProps) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {goBack && <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}><Icon name='arrow-back' size={22} color={Colors.mainColor} /></TouchableOpacity>}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
    )

}

interface AppHeaderProps {
    goBack?: boolean,
    title?: string
}

export default AppHeader