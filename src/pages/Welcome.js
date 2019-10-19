import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  Dimensions,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import Logo from '../components/Logo';

import bgImage from '../images/back.jpg'

const { width: WIDTH } = Dimensions.get('window')

export default class Welcome extends React.Component {
  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>
        <Logo />
        <Text style={styles.textStyle}> EĞLENMENİN EN KOLAY YOLU</Text>
        <TouchableOpacity style={styles.btnLogin}
          onPress={() => this.props.navigation.navigate('SignIn')}>

          <Text style={styles.btnText}>Giriş Yap</Text>
        </TouchableOpacity>
        <Text style={styles.aciklama}>Kayıt olduğunuzda Gizlilik Kuralları'nı ve Kullanım Şartları'nı kabul etmiş olursunuz.</Text>
      </ImageBackground>
    );
  }
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  textStyle: {
    color: '#6ff9ff',
    fontSize: 20,
    fontFamily: 'Oswald-BoldItalic'
  },
  btnLogin: {
    width: WIDTH - 120,
    height: 60,
    borderRadius: 25,
    backgroundColor: '#009faf',
    justifyContent: 'center',
    opacity: 0.9,
    marginTop: 80
  },
  btnText: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  aciklama: {
    color: '#009faf',
    fontSize: 14,
    marginTop: 160,
    textAlign: 'center',
    fontFamily: 'Oswald-Italic'
  }
});