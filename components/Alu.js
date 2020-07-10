import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Entities = require('html-entities').AllHtmlEntities;

// ========================================================
const Header = () => {
  const entities = new Entities();
  let alu = '&#x16EC' + '&#x16A8' + '&#x16DA' + '&#x16A2' + '&#x16EC';

  return (
    <View style={styles.aluWrapper}>
      <Text style={styles.alu}>{entities.decode(alu)}</Text>
    </View>
  );
};

// ========================================================
const styles = StyleSheet.create({
  aluWrapper: {
    // flex: 2,
    backgroundColor: 'orange',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alu: {
    fontSize: 50,
  },
});

export default Header;
