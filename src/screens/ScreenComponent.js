import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

export default function ScreenComponent({style, children}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
