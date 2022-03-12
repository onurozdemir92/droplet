import { StyleSheet } from 'react-native'
import { Colors } from '../../../theme'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        backgroundColor: Colors.backGroundWhite,
        paddingHorizontal: 10
    },
    profileImageContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingTop: 30
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    userNamesContainer: {
        alignSelf: 'stretch',
        alignItems: 'center'
    },
    countsContainer: {
        flexDirection: 'row'
    },
    countsItemContainer: {
        flex: 1,
        alignItems: 'center'
    }
})
export default styles