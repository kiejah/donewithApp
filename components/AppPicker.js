import React,{useState} from 'react';
import {Button,Platform,View,TextInput,StyleSheet,TouchableWithoutFeedback,Modal,FlatList} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../app/config/colors';
import defaultStyles from '../app/config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';
function AppPicker({icon,numColumns=1,items,placeholder,selectedItem,onSelectItem,PickerItemComponent=PickerItem}) {
    const [modalVisible,setModalVisible]= useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>

        <View style={styles.container}>
            {icon && (<MaterialCommunityIcons 
                            size={20} 
                            color={colors.medium} 
                            name={icon} 
                            style={styles.icon}
                            />
                            )}
                            {selectedItem ?(
                                <AppText style={styles.text}>{selectedItem.label} </AppText>
                            ):(
                                <AppText style={styles.placeholder}>{placeholder}</AppText>
                            )}
        
        <MaterialCommunityIcons 
                            size={20} 
                            color={colors.medium} 
                            name="chevron-down" 
                            />
        </View>

        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
            <Screen>
            
            <Button title='Close' onPress={()=>setModalVisible(false) }/>
            <FlatList 
            data={items}
            keyExtractor={item=> item.value.toString()}
            numColumns={numColumns}
            renderItem={({item})=>
            <PickerItemComponent
                item={item}
                label={item.label}
                onPress={()=>{
                    setModalVisible(false);
                    onSelectItem(item);
                }
                }/>}
            />

            </Screen>
            
        </Modal>
        </>
        
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.grayish,
        borderRadius:25,
        flexDirection:"row",
        width:'100%',
        padding:15,
        marginVertical:10
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1,
    },
    placeholder:{
      color:colors.medium,
      flex:1,
    },
})

export default AppPicker;