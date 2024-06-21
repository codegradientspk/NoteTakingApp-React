import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../utils/colors';

function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.black,
    alignSelf: 'center',
  },
});

export default Header;
