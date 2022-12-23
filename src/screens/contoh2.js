import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import  Icon  from 'react-native-vector-icons/Ionicons';


import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/Login'
import RegisterScreen from './src/screens/Register' 
import Homepage from './src/screens/Homepage';
import Akun_Profile from './src/screens/Akun_Profile';
import Recomended from './src/screens/Recomended';

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
            <Icon name="heart" color={color} size={size} />
            ),
        }}
        />

        {/* <Tab.Screen
        name="Recomended"
        component={Recomended}
        options={{
            tabBarLabel: 'Recomended',
            tabBarIcon: ({ color,size }) => (
            <Icon name="heart" color={color} size={size} />
            ),
        }}
        /> */}
        {/* <Tab.Screen
        name="Account"
        component={Akun_Profile}
        options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color,size }) => (
            <Icon name="account" color={color} size={size} />
            ),
        }}
        /> */}
    </Tab.Navigator>
    )
}

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen}/>
      <Stack.Screen name='LoginScreen' component={LoginScreen}/>
      <Stack.Screen name='RegisterScreen' component={RegisterScreen}/>
      <Stack.Screen name='Homepage' component={RootHome}/> 
      {/* <Stack.Screen nama='Akun_Profile' component={RootHome}/> */}
      {/* <Stack.Screen nama='Recomended' component={RootHome}/> */}
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App