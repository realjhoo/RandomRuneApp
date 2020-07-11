// THIS SHOWS THE INTERPRETATION OF THE RUNE
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Reading = (props) => {
  return (
    <View style={style.container}>
      <Text numberOfLine={10} style={style.text}>
        {' '}
        {props.reading}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 6,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Reading;
