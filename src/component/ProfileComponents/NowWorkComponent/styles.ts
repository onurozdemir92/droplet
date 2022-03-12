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
        fontWeight: 'bold',
        color: Colors.titleGray
    },
    companyContainer: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingVertical: 10
    },
    companyLogoContainer: {

    },
    companyLogo: {
        width: 50,
        height: 50
    },
    textContainer: {
        paddingLeft: 10
    },
    positionTitle: {
        fontWeight: 'bold',
        color: Colors.titleBlue
    },
    companyName: {
        color: Colors.titleGray,
        fontSize: 10
    },
    workType: {
        color: Colors.titleGray,
        fontSize: 10

    },
    workStartTime: {
        color: Colors.titleGray,
        fontSize: 10


    },
    location: {
        color: Colors.titleGray,
        fontSize: 10
    }
})
export default styles