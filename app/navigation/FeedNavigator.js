import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Listings from '../screens/Listings'
import ListingDetails from '../screens/ListingDetailsScreen'

const Stack = createNativeStackNavigator();

const FeedNavigator= ()=>(
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Listings' component={Listings} />
        <Stack.Screen name='ListingDetails' component={ListingDetails} options={{presentation:'modal',headerShown:false}}/>
    </Stack.Navigator>
)

export default FeedNavigator