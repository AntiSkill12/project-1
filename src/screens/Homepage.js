import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, SectionList} from 'react-native'
import React from 'react'
import Logo from '../assets/Film.jpg'
import { useNavigation } from '@react-navigation/native'


const Homepage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Search"
            placeholderTextColor="white" 
          />
           <Text style={styles.text}>Best Topik 
            <TouchableOpacity>
                <Text style={{
                  color: 'white',
                  paddingLeft: 150,
                }} onPress={() => navigation.navigate('Recomended')}
                >More »</Text>
              </TouchableOpacity>
           </Text>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
                <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Teknologi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Anime</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Animal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Biologi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Cosplay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Film</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Game</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Makanan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Saint</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>
              <Image style={styles.movie} 
                source={require('../assets/icon1.png')}
              /> Musik</Text>
            </TouchableOpacity>
          </ScrollView>

          <Text style={styles.text}>Hot Topic Film</Text>
          <View style={styles.isi}>
            <TouchableOpacity>
              <Image style={styles.logo}
              source={require('../assets/FilmNew.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textisi}>
                Tom Cruise will launch aboard a SpaceX rocket to film a movie at 
                the Space Station & could become the fist civilian to do a spacewalk
              </Text>
            </TouchableOpacity>
            <Text style={styles.textisi}>
              __________________________________________
            </Text>
            <View style={styles.icon}>
              <TouchableOpacity style={{flexDirection:'row',}}>
                <Image style={styles.iconisi}
                source={require('../assets/Chat.png')}/>
                <Text
                  style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop:5,
                  
                }}>
                  300rb
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',}}>
                <Image
                  style={styles.iconisi}
                  source={require('../assets/Like.png')}/>
                <Text
                  style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop:5,
                  
                }}>
                  60rb
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconisi}
                  source={require('../assets/Share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.isi}>
            <TouchableOpacity>
              <Image style={styles.logo}
              source={require('../assets/Film2New.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textisi}>
                'AVANGERS: SECREAT WARS' has been dalayed to May 1, 2026. 
                See what other <Text style={{fontWeight:'bold'}}> Movies</Text> have been delayed:
                bit.ly/Dates2022
              </Text>
            </TouchableOpacity>
            <Text style={styles.textisi}>
              __________________________________________
            </Text>
            <View style={styles.icon}>
              <TouchableOpacity style={{flexDirection:'row',}}>
                <Image style={styles.iconisi}
                source={require('../assets/Chat.png')}/>
                <Text
                  style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop:5,
                  
                }}>
                  200rb
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',}}>
                <Image
                  style={styles.iconisi}
                  source={require('../assets/Like.png')}/>
                <Text
                  style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop:5,
                  
                }}>
                  80rb
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconisi}
                  source={require('../assets/Share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.isi}>
            <TouchableOpacity>
              <Image style={{
                width:300, 
                height:390, 
                marginTop: 20,
                marginBottom: 20,
                alignSelf:'center',}}
              source={require('../assets/Film3New.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.textisi}>
                Tune in at 1:05 p.m. PT on 10/6 for a #NintendoDirect: The Super Mario Bros.
                <Text style={{fontWeight:'bold'}}> Movies </Text> presentation introducing the world premiere trailer
                for the uncoming <Text style={{fontWeight:'bold'}}> Film </Text>
                (no game information will be featured).
              </Text>
            </TouchableOpacity>
            <Text style={styles.textisi}>
              __________________________________________
            </Text>
            <View style={styles.icon}>
              <TouchableOpacity style={{flexDirection:'row',}}>
                <Image style={styles.iconisi}
                source={require('../assets/Chat.png')}/>
                <Text
                  style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop:5,
                  
                }}>
                  220rb
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={{flexDirection:'row',}}>
                <Image
                  style={styles.iconisi}
                  source={require('../assets/Like.png')}/>
                <Text
                  style={{
                  color: 'black',
                  fontSize: 14,
                  marginTop:5,
                  
                }}>
                  80rb
                </Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.iconisi}
                  source={require('../assets/Share.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.text}>Hot Topic Anime</Text>
          <Image source={require('../assets/Anime.jpg')}
          style={{width:350, height:780, marginBottom:30}}/>
          <Image source={require('../assets/Anime2.jpg')}
          style={{width:350, height:700, marginBottom:30}}/>
          <Image source={require('../assets/Anime3.jpg')}
          style={{width:350, height:680, marginBottom:30}}/>

          <Text style={styles.text}>Hot Topic Teknologi</Text>
          <Image source={require('../assets/Teknologi.jpg')}
          style={{width:320, height:450, marginBottom:30}}/>
          <Image source={require('../assets/Teknologi2.jpg')}
          style={{width:320, height:250, marginBottom:30}}/>
          <Image source={require('../assets/Teknologi3.jpg')}
          style={{width:350, height:700, marginBottom:30}}/>
        </View>
      </ScrollView>
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
  isi: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flex: 1,
    marginBottom:20,
    borderRadius: 20,
  },
  textisi: {
    color: 'black',
    fontSize: 16,
    alignSelf:'center',
    marginHorizontal:12,
  },
  input: {
    width: 320,
    height: 50,
    backgroundColor: '#333',
    borderRadius: 20,
    color:'white',
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: 25,
    textAlign: 'left',
    marginBottom: 30,
  },
  textButton: {
    color: 'black',
    fontSize: 20,
  },
  
  button: {
    width: 140,
    height: 55,
    marginHorizontal: 5,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width:320, 
    height:150, 
    marginVertical: 20,
    alignSelf:'center',
  },
  movie: {
    width: 25,
    height: 25, 
  },
  scrollView: {
    marginHorizontal: 20,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconisi: {
    width: 30,
    height: 30, 
    marginHorizontal: 15,
  },
})

export default Homepage