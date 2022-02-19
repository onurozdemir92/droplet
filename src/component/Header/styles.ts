import { StyleSheet } from 'react-native'
import { Colors } from '../../theme';

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 24,
        color:Colors.mainColor
    },
    

})


export default styles;