import { StyleSheet } from 'react-native'
import { Colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        paddingVertical: 5,
        marginTop: 5,

        borderBottomColor: Colors.borderGray,
        borderBottomWidth: 2
    },
    subContainer: {
        alignSelf: 'stretch',
        marginHorizontal: 10,

    },
    postHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    dotIcon: {
    },
    dotButton: {
        alignItems: 'center'
    },
    textContainer: {
        alignSelf: 'stretch',
        padding: 5
    },
    timeText: {
        fontSize: 8,
        color: Colors.userName
    },
    tagText: {
        color: Colors.tagColor,
        fontSize: 12
    }

})


export default styles;