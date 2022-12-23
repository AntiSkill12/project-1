import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import Login from './src/screen/Login'
import Register from './src/screen/Register'
import Homepage from './src/screen/Homepage'
import Splash from './src/screen/Splash'
import Recomended from './src/screen/Recomended'
import Account from './src/screen/Account'


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const RootHome = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
       tabBarActiveTintColor: "#eb4034",
        headerShown: false,
      }}
      >
        <Tab.Screen
        name="Home"
        component={Homepage}
        options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color,size }) => (
            <Icon name="home" color={color} size={size} />
            ),
        }}
        />

        <Tab.Screen
        name="Recomended"
        component={Recomended}
        options={{
            tabBarLabel: 'Recomended',
            tabBarIcon: ({ color,size }) => (
            <Icon name="heart" color={color} size={size} />
            ),
        }}
        />
        <Tab.Screen
        name="Account"
        component={Account}
        options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color,size }) => (
            <Icon name="account" color={color} size={size} />
            ),
        }}
        />
    </Tab.Navigator>
    )
}

const App = () => {
  return (
    <NavigationContainer screenOptions = {{headerShown: false}}>
      <Stack.Navigator >
        <Stack.Screen name='Splash' component={Splash}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Register' component={Register}/>
        <Stack.Screen name='Homepage' component={RootHome}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App