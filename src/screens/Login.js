import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, RefreshControl , ToastAndroid} from 'react-native'
import React, {useState} from 'react'
import Logo from '../assets/twitter.png'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const App = () => {
  const navigation = useNavigation();
  const [nip, setNip] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (value) => {
    console.log('value', value);
    try {
      const response = await axios.post('http://192.168.43.199:3200/users/login',{
        nip: value.nip,
        password: value.password
      }) 
      if (response.data.status == 200) {
        console.log('response', response.data.data)
        navigation.navigate('Homepage')
        // AsyncStorage.setItem
        await AsyncStorage.setItem('password', value.password)
        await AsyncStorage.setItem('nip', value.nip)
        await AsyncStorage.setItem('name', response.data.data.nama)
      }
    } catch (error) {
        console.log(error.message)
        ToastAndroid.show("Cek kembali nip dan password", ToastAndroid.SHORT)
    }
  }

  return(
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={{
        color: 'white',
        fontSize: 30,
        marginBottom: 20,
      }}>Twitter</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="white"
          onChangeText={(nip) => setNip(nip)}
          value={nip}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="white"
          onChangeText={(password) => setPassword(password)}
          value={password}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            await handleLogin({ nip, password});
          }}
        >
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Don't have an account? 
        <Text style={{fontWeight:'bold'}}
        onPress={() => navigation.navigate('RegisterScreen')}
        >Sign Up</Text></Text> 
      </View>
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
    width: 200,
    height: 200,
  },
  input: {
    width: 300,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 10,
    color:'white',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    width: 300,
    height: 50,
    backgroundColor: '#f2ed46',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: '#000',
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  }
})
export default App