import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles'
import { Colors } from '../../theme';
import { Strings } from '../../theme/strings';
import { useNavigation } from '@react-navigation/native';
import { Screens } from '../../navigations/StackNavigation';

const Header = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>{Strings.appName}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Screens.chatList)}>
                <FontAwesome name="send" size={20} color={Colors.mainColor} />
            </TouchableOpacity>
        </View>
    )
}

export default Header