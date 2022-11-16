import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import {FontAwesome5} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' translucent={false} />
      
      <Image
      resizeMode='center'
      source={require('./src/assets/logo.png')}
      style={styles.logo}
      />

<TextInput
placeholder="Celular, username ou email"
style={styles.input}
/>
<TextInput
placeholder="Sua senha"
style={styles.input}
/>

<View style={styles.forCont}>
  <TouchableOpacity>
<Text style={styles.forText}>Esqueceu sua senha?</Text>
  </TouchableOpacity>
</View>

<TouchableOpacity style={styles.loginButton}>
<Text style={styles.loginText}>Acessar</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.facebookCont}>
  <FontAwesome5 name="facebook" size={25} color="#399fff" />
<Text style={styles.facebookText}>Continue como Andre</Text>  
</TouchableOpacity>

<View style={styles.divisor}>
  <View style={styles.diviLine}></View>
  <Text style={{marginHorizontal: '3%' }} >OU</Text>
  <View style={styles.diviLine}></View>
</View>

<View style={styles.signCont}>
<Text style={styles.signText}>Não possui uma conta?</Text>
<TouchableOpacity>
  <Text style={styles.signButton}>Cadastre-se</Text>
</TouchableOpacity>

</View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#FFF',
    alignItems: 'center',
    justifyContent: 'center'    
  },

  logo:{
    marginTop: '13%',
    width: 220,
    height: 108,
    marginBottom: '13%',
  },

  input:{
  width: '90%',
  height: 42,
  backgroundColor: '#F4F3F3',
  marginBottom: 20,
  padding: 8,
  borderRadius: 5,
  borderWidth: 1,
  borderColor: '#E0E0E0'
  },

  forCont:{
    width: '90%',
    alignItems: 'flex-end'

  },
  forText:{
    color: '#399fff',
  },

  loginButton:{
  marginTop: '5%',
  backgroundColor: '#399fff',
  width: '90%',
  height: 42,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 5,
  },

  loginText: {
    color: '#FFF',
    fontSize: 17
  },

  facebookCont: {
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: '15%',
  },

  facebookText: {
  color: '#399fff',
  paddingLeft: 8,
  fontSize: 15
},

divisor: {
  marginTop: '10%',
  flexDirection: 'row',
  width: '90%',
  justifyContent: 'center',
  alignItems: 'center',
},

diviLine: {
  width: '45%',
  height: 2,
  backgroundColor: '#EFEDED',
  borderRadius: 5,
},

signCont: {
flexDirection: 'row',
marginTop: '10%'
},

signText: {
color: '#C4c4c4',
paddingRight: 5,
},

signButton: {
  color: '#399fff',
  fontWeight: 'bold'
}

});
