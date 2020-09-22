import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Header = ({appTitle}) => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>{appTitle}</Text>
    </SafeAreaView>
  );
};

Header.defaultProps = {
  appTitle: 'Header',
};

const styles = StyleSheet.create({
  header: {
    height: 150,
  },
  text: {
    color: '#fff',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default Header;
