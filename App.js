import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import Header from './components/Header';
import Alu from './components/Alu';
// import ParticleBackground from 'react-native-particle-background';
const Entities = require('html-entities').AllHtmlEntities;
const fehu = '&#x16A0;',
  uruz = '&#x16A2;',
  thurisaz = '&#x16A6;',
  ansuz = '&#x16A8;',
  raido = '&#x16B1;',
  kenaz = '&#x16B2;',
  gebo = '&#x16B7;',
  wunjo = '&#x16B9;',
  hagalaz = '&#x16BA;',
  naudiz = '&#x16BE;',
  isa = '&#x16C1;',
  jera = '&#x16C3;',
  eihwaz = '&#x16C7;',
  perthro = '&#x16C8;',
  algiz = '&#x16C9;',
  sowilo = '&#x16CB;',
  tiwaz = '&#x16CF;',
  berkano = '&#x16D2;',
  ehwaz = '&#x16D6;',
  mannaz = '&#x16D7;',
  laguz = '&#x16DA;',
  ingwaz = '&#x16DD;',
  dagaz = '&#x16DE;',
  othala = '&#x16DF;',
  dot = '&#x16EB;',
  double_dot = '&#x16EC;';

const selectedRune = [
  '&#x16A0;',
  '&#x16A2;',
  '&#x16A6;',
  '&#x16A8;',
  '&#x16B1;',
  '&#x16B2;',
  '&#x16B7;',
  '&#x16B9;',
  '&#x16BA;',
  '&#x16BE;',
  '&#x16C1;',
  '&#x16C3;',
  '&#x16C7;',
  '&#x16C8;',
  '&#x16C9;',
  '&#x16CB;',
  '&#x16CF;',
  '&#x16D2;',
  '&#x16D6;',
  '&#x16D7;',
  '&#x16DA;',
  '&#x16DD;',
  '&#x16DE;',
  '&#x16DF;',
  '&#x16EB;',
  '&#x16EC;',
];
const App = () => {
  const entities = new Entities();

  // ========================================================
  const randomRune = () => {
    // function randomRune() {
    // generate a random number between 0 and 23
    let max = 23;
    let randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
    // }
  };

  let x = randomRune();

  return (
    <View style={styles.container}>
      <Header />
      <Alu />
      <Text>
        Output goes here. This will need to fill most of the space. Also{' '}
        {entities.decode(fehu)}
      </Text>
      <Button title="This is a button" />
      <Text>The random number is {x}</Text>
      <Text>The random rune is {entities.decode(selectedRune[x])}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#200325',
    // backgroundColor: 'rgb(32, 3, 37)',
    // color: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default App;
