import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Logo from '../assets/twitter.png'

const SplashScreen = ({navigation}) => {
    setTimeout(() => {
        navigation.replace('LoginScreen');
    }, 3000);
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.logo}/>
      <Text style={styles.text}>Twitters</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo: {
        width: 250,
        height: 250,
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      },
})

export default SplashScreen