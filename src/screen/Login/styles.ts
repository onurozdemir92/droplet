import { Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '../../theme'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({

    container: {
        backgroundColor: Colors.backGroundWhite,
        width: width,
        height: height
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
        flex:1
    },
    appName: {
        fontSize: 30,
        color: Colors.mainColor,
        fontWeight: 'bold'
    },
    inputContainer: {
        alignItems: 'center',
        alignSelf: 'stretch',
        flex:1,
        justifyContent:'center'
    },
    input: {
        width: '90%',
        backgroundColor: Colors.backGroundGray,
        borderRadius: 5
    },
    ButtonContainer: {
        alignSelf: 'stretch',
        alignItems: 'center',
        flex:1,
        justifyContent:'center'
    },
    Button: {
        width: '90%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.mainColor,
        paddingVertical: 15
    },
    buttonText: {
        color: Colors.textWhite,
        fontWeight: 'bold',
        fontSize: 15
    }
})
export default styles