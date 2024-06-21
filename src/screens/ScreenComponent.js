import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

export default function ScreenComponent({style, children}) {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});