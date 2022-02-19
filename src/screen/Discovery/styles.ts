import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backGroundWhite
    },
    inputContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        paddingVertical: 5
    },
    input: {
        width: '90%',
        backgroundColor: Colors.backGroundGray,
        borderRadius: 5
    },
    worldListContainer: {
        alignSelf: 'stretch',
        flex: 1,
    },
    localListContainer: {
        alignSelf: 'stretch',
        flex: 1,

    },
    titleHeader: {
        alignSelf: 'stretch',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderBottomColor: Colors.borderGray,
        borderBottomWidth: 1
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 14,
        color: Colors.mainColor
    },
    scroll: {
        flex: 1,
    },
    listItemContainer: {
        alignSelf: 'stretch',
        paddingVertical: 5,
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 40
    },
    listItemTitleText: {
        color: Colors.tagColor,
        flex: 1
    },
    indexContainer: {
        height: '100%',
        width: 30,
        alignItems: 'center'
    },
    indexText: {
        color: Colors.mainColor
    },
    countText: {
        color: Colors.mainColor
    }
})
export default styles