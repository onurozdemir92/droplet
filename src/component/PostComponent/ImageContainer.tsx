import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const ImageContainer = ({images}:ImageContainerProps) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: images[0] }} />
        </View>
    )
}

interface ImageContainerProps {
    images: string[]
}

export default ImageContainer

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        height: 200
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    }
})