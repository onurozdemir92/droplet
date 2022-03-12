import { StyleSheet } from 'react-native'
import { Colors } from '../../theme'


const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flexDirection: 'row',
        paddingVertical: 5,
        backgroundColor: Colors.backGroundWhite,
        alignItems: 'center'

    },
    textInput: {
        flex: 1,
        borderColor: Colors.borderGray,
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginLeft: 10,
        fontSize: 12
    },
    sendButton: {
        paddingHorizontal: 10
    },
   

})


export default styles