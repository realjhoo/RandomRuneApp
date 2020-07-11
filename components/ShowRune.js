// THIS SHOWS THE RUNE
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ShowRune = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.text}> {props.name} </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    // backgroundColor: 'pink',
    alignItems: 'center',
  },
  text: {
    fontSize: 90,
    color: '#fff',
  },
});

export default ShowRune;
