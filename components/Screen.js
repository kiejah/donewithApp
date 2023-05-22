import React from 'react';
import {StyleSheet,SafeAreaView,View} from 'react-native';
import Constants from 'expo-constants';
function Screen({children,style}) {
    return (
            <SafeAreaView style={[styles.container,style]}>
              <View style={style}>
              {children}
              </View>
                
            </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
      paddingTop:Constants.statusBarHeight,
    },
  })

export default Screen;