import React from 'react';
import {View,ActivityIndicator} from 'react-native';

function MyActivityIndicator({visible=false}) {
if(!visible) return null
  return <ActivityIndicator animating={true}/>
 
}


export default MyActivityIndicator;