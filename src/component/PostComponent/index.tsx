import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles'
import { IPost } from '../../interfaces';
import IconMIC from 'react-native-vector-icons/MaterialCommunityIcons'
import ImageContainer from './ImageContainer';
import UserContainer from './UserContainer';
import FooterContainer from './FooterContainer';
import { Colors } from '../../theme';

const PostComponent = (item: IPost) => {

    return (
        <TouchableOpacity activeOpacity={.95} style={styles.container}>
            <View style={styles.subContainer}>
                <View style={styles.postHeader}>
                    <UserContainer />
                    <TouchableOpacity style={styles.dotButton}>
                        <IconMIC style={styles.dotIcon} name='dots-horizontal' size={25} color={Colors.mainColor} />
                        <Text style={styles.timeText}>1 gün önce</Text>
                    </TouchableOpacity>
                </View>
                {item.text && <Text style={styles.textContainer}>{item.text}
                </Text>}

                {(item?.images?.length || 0) > 0 && <ImageContainer images={item?.images || []} />}

                <FooterContainer />
                <Text>
                    <TouchableOpacity><Text style={styles.tagText}>#Merhaba</Text></TouchableOpacity><Text></Text>
                    <TouchableOpacity><Text style={styles.tagText}>#Merhaba</Text></TouchableOpacity><Text></Text>
                    <TouchableOpacity><Text style={styles.tagText}>#Merhaba</Text></TouchableOpacity><Text></Text>
                    <TouchableOpacity><Text style={styles.tagText}>#Merhaba</Text></TouchableOpacity><Text></Text>
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default PostComponent