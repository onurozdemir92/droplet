import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor,
        alignItems: 'center',
        paddingTop: '40%'
    },
    appName: {
        color: 'white',
        fontSize: 35
    }
})

export default styles