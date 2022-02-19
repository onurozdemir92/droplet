import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    storyContainer: {
        width: 85,
        height: 140,
        marginLeft: 10,
        borderRadius: 10,

    },
    storyUserAvatarContainer: {
        position: 'absolute',
        width: 85,
        height: 40,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    storyAvatarImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#fff',
        borderWidth: 2
    },    
    storyImage: {
        height: 140,
        width: 85,
        borderRadius: 10,
        borderColor: '#607D8B',
        borderWidth: 3
    },

})
export default styles