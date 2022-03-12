import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: Colors.backGroundWhite,
        borderBottomColor: Colors.borderGray,
        borderBottomWidth: .5,
        flexDirection: 'row',
        padding:10
    },
    logoContainer: {

    },
    logo: {
        width: 60,
        height: 60
    },
    textContainer: {
        flex: 1,
        marginLeft:10
    },
    title: {
        fontWeight: 'bold',
        color: Colors.titleBlue
    },
    companyName: {
        color: Colors.titleGray,
        fontSize: 11
    },
    Location: {
        color: Colors.titleGray,
        fontSize: 11
    },
    wage: {
        color: Colors.titleGray,
        fontSize: 11,
        fontWeight: 'bold'
    },
    recourse: {
        color: Colors.titleRecourse,
        fontSize: 11,
        fontWeight: 'bold'
    },
    titleTime: {
        color: Colors.titleGray,
        fontSize: 11,

    }



})


export default styles