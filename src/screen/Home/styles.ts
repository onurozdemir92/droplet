import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../theme';
const { width, height } = Dimensions.get('window')
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.backGroundWhite
    },
    storyScroll: {
        width: '100%',
        paddingVertical: 5
    },

    postContainer: {
        flex: 1,
    }
})

export default Styles;