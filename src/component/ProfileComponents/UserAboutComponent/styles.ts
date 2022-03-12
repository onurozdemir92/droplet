import { StyleSheet } from 'react-native'
import { Colors } from '../../../theme'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: Colors.backGroundWhite,
        paddingHorizontal: 10,
        marginTop: 20
    },
    title: {
        color: Colors.titleGray,
        fontWeight: 'bold'
    },
    text: {
        fontSize: 12,
        padding:10
    }
})
export default styles