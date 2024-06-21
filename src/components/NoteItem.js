import React, { useCallback } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteNote } from '../redux/notesSlice';

const NoteItem = ({ note }) => {
  const dispatch = useDispatch();

  const handleDelete = useCallback(() => {
    dispatch(deleteNote(note.id));
  }, [dispatch, note.id]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{note.content}</Text>
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    flex: 1,
    alignSelf:'center'
  },
});

export default NoteItem;