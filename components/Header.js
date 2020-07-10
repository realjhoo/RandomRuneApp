import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>Random Rune</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    // padding: 20,
    backgroundColor: 'dodgerblue',
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
