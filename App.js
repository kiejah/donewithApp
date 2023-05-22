// In App.js in a new project

import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons'


import Screen from './components/Screen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';

import NavigationTheme from './app/navigation/NavigationTheme';
import ListingEditScreen from './app/screens/ListingEditScreen';
import Register from './app/screens/RegisterScreen';


const hmscreen= function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Link= ()=>{
  const navigation = useNavigation();
  return (
    <Button title='Click'
    onPress={()=>navigation.navigate("TweetDetails",{id:1})}/>

)}
const Tweets= ({navigation})=>(
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>

)
const TweetDetails= ({route})=>(
<Screen>
  <Text>Tweet Details {route.params.id}</Text>
</Screen>

)

const StackNavigator = ()=>(
  <Stack.Navigator 
  screenOptions={{
    headerStyle:{
      backgroundColor:'dodgerblue'
    },
    headerTintColor:'white',
  }}>
     <Stack.Screen
      name='Tweets' 
      component={Tweets} 
      options={({route})=>({
      headerStyle:{
        backgroundColor:'tomato'
      },
      headerTintColor:'white',
      })} />
     <Stack.Screen name='WelcomeScreen' 
     component={WelcomeScreen} />
     <Stack.Screen 
      name='TweetDetails' 
      component={TweetDetails} 
      options={({route})=>({
        title: "TTLD "+route.params.id,
        })} 
     />
   </Stack.Navigator>
   )

const Stack = createNativeStackNavigator();



const Tab = createBottomTabNavigator();
const TabNavigator=()=>(
  <Tab.Navigator 
  
  tabBarOptions={{
    activeBackgroundColor:'tomato',
    activeTintColor:'white',
    inactiveBackgroundColor:'#eee',
    inactiveTintColor:'black',

  }}>
    <Tab.Screen 
    name= 'home' 
    component={ StackNavigator } 
    options={{
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="home" color={color} size={size} />
      ),
    }}/>
    <Tab.Screen 
    name= 'feed' 
    component={ Tweets }
    options={{
      tabBarLabel: 'Feeds',
      tabBarIcon: ({ color, size }) => (
        <MaterialCommunityIcons name="menu" color={color} size={size} />
      ),
    }}/>
  </Tab.Navigator>
)

function App() {
  return (
    // <NavigationContainer theme={NavigationTheme}>
    //   <AppNavigator />
    // </NavigationContainer>
    <Register />
   
  );
}

export default App;