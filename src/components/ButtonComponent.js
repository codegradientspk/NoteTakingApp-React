import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import colors from '../utils/colors';

function ButtonComponent({style, text, onPress}) {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={{color: colors.white}}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.blue,
    borderRadius: 5,
    height: 40,
  },
});

export default ButtonComponent;
