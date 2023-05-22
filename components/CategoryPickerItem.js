import React from 'react';
import {StyleSheet,View,TouchableOpacity} from 'react-native';

import Icon from './Icon';
import colors from '../app/config/colors';
import AppText from './AppText';

function CategoryPickerItem({item,onPress}) {
    return (
        
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            </TouchableOpacity>
            <AppText morestyles={styles.label}>{item.label}</AppText>
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:30,
        paddingVertical:15,
        alignItems:'center',
        width:'33%',
    },
    label:{
        marginTop:10,
        fontSize:12,
    }
})
export default CategoryPickerItem;