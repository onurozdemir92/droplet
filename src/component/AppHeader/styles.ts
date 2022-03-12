import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 50,
        backgroundColor: Colors.backGroundWhite,
        alignItems: 'center',
        flexDirection: 'row'
    },
    goBackButton: {
        paddingHorizontal: 10
    },
    titleContainer: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: Colors.mainColor,
        fontSize:16
    }

})


export default styles