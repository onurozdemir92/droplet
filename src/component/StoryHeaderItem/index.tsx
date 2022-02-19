import { View, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import styles from './styles'

const StoryHeaderItem = ({ imageUrl }: StoryHeaderItemProps) => {
    return (
        <TouchableOpacity style={styles.storyContainer}>
            <Image
                style={styles.storyImage}
                source={{
                    uri: imageUrl,
                }}
            />
            <View style={styles.storyUserAvatarContainer}>
                <Image
                    source={{
                        uri:
                            'https://images.unsplash.com/photo-1522778147829-047360bdc7f6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjN8fHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                    }}
                    style={styles.storyAvatarImage}
                />
            </View>
        </TouchableOpacity>
    )
}

interface StoryHeaderItemProps {
    imageUrl: string
}

export default StoryHeaderItem