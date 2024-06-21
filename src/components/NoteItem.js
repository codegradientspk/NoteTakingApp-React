import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonComponent from './ButtonComponent';
import colors from '../utils/colors';

const NoteItem = ({note, onDelete}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.content}</Text>
      <ButtonComponent
        style={{backgroundColor: colors.red, alignSelf: 'center'}}
        text="Delete"
        onPress={onDelete}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#e6e6e6',
    padding: 8,
    borderRadius: 8,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    color: colors.black,
    marginEnd: 10,
  },
});

export default NoteItem;
