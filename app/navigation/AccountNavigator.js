import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountScreen from '../screens/AccountScreen';
import MessageScreen from '../screens/MessageScreen';
import Listings from '../screens/Listings';


const Stack = createNativeStackNavigator();

const AccountNavigator= ()=>(
    <Stack.Navigator>
        <Stack.Screen name='Account' component={AccountScreen} />
        <Stack.Screen name='Messages' component={MessageScreen} />
        <Stack.Screen name='Listings' component={Listings} />
    </Stack.Navigator>
)

export default AccountNavigator