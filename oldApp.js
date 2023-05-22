import React, {useState,useEffect} from 'react';
import {StyleSheet,View,Image,Text,TextInput,Switch,Button} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

import SafeViewAndroid from "./components/SafeViewAndroid";
import AppButton from './components/AppButton'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessageScreen from './app/screens/MessageScreen';
import Card from './components/Card';
import Screen from './components/Screen';
import ImageInput from './components/ImageInput';

import Icon from './components/Icon';
import ListItem from './components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import Listings from './app/screens/Listings';
import AppTextInput from './components/AppTextInput';
import AppPicker from './components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'
import ImageInputList from './components/ImageInputList';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Tweets= ()=>(
 
    <Text>Tweets</Text>
  
  
)
const TweetDetails= ()=>(
  
    <Text>Tweet Details</Text>
 
  
)
const Stack = createNativeStackNavigator();

const StackNavigator = ()=>(
 <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} />
  </Stack.Navigator>
  )


export default function App() {

  return (
    <Screen>
      <Text>fftttrtrtrtrtrtrtrtrr</Text>
        <NavigationContainer>
        {<Stack.Screen name='Tweets' component={Tweets} />}
        </NavigationContainer>
    </Screen>
      
  )
}


