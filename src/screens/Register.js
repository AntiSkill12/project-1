import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native';
import React, { useState, useEffect } from 'react';
import Logo from '../assets/twitter.png';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

// // sama kayak login tapi tamba email sama password
const Register = () => {
  const navigation = useNavigation();
  const [nip, setNip] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');
  // const [konfirmasiSandi, setKonfirmasiSandi] = useState("");


  const [data, setData] = useState({
    nip: '',
    password: '',
    name: ''
  })

  useEffect(() => {
    getData()
    return () => { };
  }, []);

const getData = async () => {
    try {
        let nip = await AsyncStorage.getItem('nip')
        let password = await AsyncStorage.getItem('password')
        let nama = await AsyncStorage.getItem('name')
        if (nip !== null) {
            // value previously stored
            setData({
                nip: nip,
                nama: nama,
                password: password,
            })
        }
    } catch (e) {
        // error reading value
    }
};

  const register = async (value) => {
    console.log('value', value);
    try {
        const response = await axios.post('http://192.168.43.199:3200/users', {
          
          nama: value.nama,  
          nip: value.nip,
          password: value.password,
        })
        if (response.data.status == 200) {
            console.log('response', response)
            navigation.navigate('Login')
            ToastAndroid.show("Register Berhasil", ToastAndroid.SHORT)
        }
    } catch (error) {
        console.log(error.message)
        ToastAndroid.show("Register Gagal", ToastAndroid.SHORT)
    }
  }
  return (
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
          onChangeText={(nama) => setNama(nama)}
          value={nama}
        />
        <TextInput
          style={styles.input}
          placeholder="Nip"
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
        {/* <TextInput
          style={styles.input}
          placeholder="Konfirmasi Password"
          placeholderTextColor="white"
          // secureTextEntry={true}
          onChangeText={(password) => setKonfirmasiSandi(password)}
          value={konfirmasiSandi}
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            if ( nama == "" || nip == "" || password == "" ) {
              ToastAndroid.show("Data tidak boleh kosong", ToastAndroid.SHORT);
            } else {
              await register({nama,nip,password});
            }
            //  else if (nip !== data.nip || password !== data.password) {
            //   ToastAndroid.show('NIP atau Password Salah', ToastAndroid.SHORT);
            // } else if (password !== konfirmasiSandi) {
            //   ToastAndroid.show('Password Baru dan Konfirmasi Password Tidak Sama', ToastAndroid.SHORT);
            // } else {
            //   register({ nip: nip, nama: nama, password: password })
            // }
          }}>
          <Text style={styles.textButton}>Register</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
        <Text style={{fontStyle:'italic'}}>Already have an account? </Text>  
        <Text style={{fontWeight:'bold'}}
        onPress={() => navigation.goBack()}
        >Login</Text></Text> 
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
export default Register