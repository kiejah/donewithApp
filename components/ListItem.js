import React from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {TouchableHighlight,StyleSheet,View,Image,Text} from 'react-native';
import MultiTap from 'react-native-multitap'


import Apptext from './AppText';
import colors from '../app/config/colors';

function ListItem({image,title,subTitle,ImageComponent,onPress,onDoubleTap}) {
    return (
        <MultiTap 
            onDoubleTap={onDoubleTap} delay={300}
            onSingleTap={onPress}>
            <View style={styles.container}>
                {ImageComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style={styles.detailsContainer}>
                    <Apptext numberOfLines={1} morestyles={styles.title}>{title}</Apptext>
                   {subTitle && <Apptext numberOfLines={2} morestyles={styles.subTitle}>{subTitle}</Apptext> }
                </View>
                <MaterialCommunityIcons color={colors.medium} name='chevron-right' size={25} />
            </View>
            </MultiTap>
           
        
    );
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flexDirection:"row",
        padding:15,
        backgroundColor:colors.white
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
    },
    title:{
        fontWeight:"800"
    },
    subTitle:{
        color:colors.medium,
    },
    deleteIcon:{
        position:'absolute',
        top:40,
        right:30,
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center',
        flex:1
    },
})

export default ListItem;