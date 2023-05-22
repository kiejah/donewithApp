import React from 'react';
import { ImageBackground, StyleSheet,View,Image,Text} from 'react-native';
import AppButton from '../../components/AppButton';

import { NavigationContainer, useNavigation , useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function WelcomeScreen({navigation}) {
    const route = useRoute();
    return (
        <ImageBackground 
        blurRadius={5}
        style={styles.background}
        source={ require('../assets/bg2.jpg')}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={ require('../assets/logo.png')} />
                <Text style={styles.tagline}>Moving Together </Text>
            </View>
            <View style={styles.buttonsContainer} >
                <AppButton title="Login" onPress={()=>navigation.navigate('Login')}/>
                <AppButton title="Register" color='secondary' onPress={()=>navigation.navigate('Register')}/>
            </View>
            
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    registerButton:{
        width:'100%',
        height:70,
        backgroundColor:'#4ecdc4'
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'   
    },
    logo:{
        width:200,
        height:200,
    },
    buttonsContainer:{
       width:'100%',
       padding:20,
    },
    tagline:{
        fontSize:25,
        fontWeight:"600",
        paddingVertical:10
    }

    

})

export default WelcomeScreen;