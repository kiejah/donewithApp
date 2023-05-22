import React,{useEffect} from 'react';
import { View, StyleSheet,Image,TouchableWithoutFeedback,Alert} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../app/config/colors';

function ImageInput({imageUri,onChangeImage}) {
    useEffect(()=>{
        requestPermision();
      },[])

    const requestPermision= async ()=>{
        const {granted}= await ImagePicker.requestMediaLibraryPermissionsAsync();
        if(!granted) alert('You need Permision to access the library'); 
      }
  
  const handlePress =()=>{
      if(!imageUri) selectImage();
      else Alert.alert('Delete',"Are you sure you want to delete the message? ",[
        {text:'Yes', onPress:()=>onChangeImage(null)},
        {text:'No'}
      ])
  } 

  const selectImage= async ()=>{
    try {
      const imresult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          quality:0.5,
      });
      if(!imresult.cancelled) onChangeImage(imresult.uri)
    } catch (error) {
      console.log("error reading an image ", error);
    }
    
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name='camera' size={40} color={colors.reddish}/> }
        {imageUri && <Image source={{uri:imageUri}} style={styles.image}/> }
        </View>
    </TouchableWithoutFeedback>
   
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor:colors.light,
      borderRadius:15,
      justifyContent:'center',
      alignItems:'center',
      width:100,
      height:100,
      overflow:'hidden',
  },
  image:{
    width:'100%',
    height:'100%',
  },
});

export default ImageInput;