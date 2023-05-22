import React from 'react';
import {Platform,StyleSheet,View,Image,Text,TouchableWithoutFeedback} from 'react-native';

import colors from '../app/config/colors';
import AppText from './AppText';

function Card({title,subTitle,imageUrl,onpress}) {
    return (
        <TouchableWithoutFeedback onPress={onpress}>

        <View style={styles.card}>
            <Image style={styles.image} source={{uri:imageUrl}} />
            <View style={styles.detailsContainer}>
                <AppText> {title}{"\n"}</AppText>
                <AppText morestyles={styles.subTitle}> {subTitle} </AppText>
            </View>
            
        </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    card:{
        borderRadius:15,
        backgroundColor:colors.white,
        marginBottom:20,
        overflow:'hidden'
    },
    image:{
        width:"100%",
        height:200
    },
    detailsContainer:{
       paddingVertical:10,
       paddingHorizontal:10
    },
    subTitle:{
        color:Platform.OS === "android" ? colors.reddish : colors.primary,
        fontWeight:'bold'
    },
})

export default Card; 