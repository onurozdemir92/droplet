import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingHorizontal: 10,
        backgroundColor: Colors.backGroundWhite,
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 10
    },
    flex: {
        flex: 1,
    },
    searchInput: {
        color: Colors.mainColor
    },
    jobsContainer:{
        alignSelf: 'stretch',
        backgroundColor: Colors.backGroundWhite,
        marginTop: 10
    }


})


export default styles