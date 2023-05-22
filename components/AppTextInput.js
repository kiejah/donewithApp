import React from 'react';
import {Platform,View,TextInput,StyleSheet} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../app/config/colors';
import defaultStyles from '../app/config/styles';
function AppTextInput({icon,width="100%",...otherProps}) {
    return (
        <View style={[styles.container,{width:width}]}>
            {icon && <MaterialCommunityIcons size={20} color={colors.medium} name={icon} style={styles.icon}/>}
            <TextInput 
            placeholderTextColor={defaultStyles.colors.medium}
            style={defaultStyles.text} {...otherProps}/>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.grayish,
        borderRadius:25,
        flexDirection:"row",
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    }
})

export default AppTextInput;