import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Fontisto'
import { Colors } from '../../theme'

const FooterContainer = () => {

    const [liked, setLiked] = useState<boolean>(false)

    return (
        <View style={styles.container}>
            <View style={styles.itemButtons}>
                <View style={styles.buttonContainer}>
                    {/* <IconI name='heart' color={Colors.mainColor} size={23} />
                     */}
                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        <IconI name={liked ? 'heart' : 'heart-outline'} color={liked ? 'red' : Colors.mainColor} size={23} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>250</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <IconF name='comment' color={Colors.mainColor} size={20} />
                    </TouchableOpacity>
                    <Text style={styles.countText}>250</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                        <IconF name='share-a' color={Colors.mainColor} size={17} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity>
                    <IconI name='share-outline' color={Colors.mainColor} size={23} />
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default FooterContainer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        paddingRight: 10,

    },
    itemButtons: {
        flexDirection: 'row',
        flex: 2,
    },
    buttonContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20
    },
    countText: {
        color: Colors.mainColor,
        marginLeft: 10
    }
})