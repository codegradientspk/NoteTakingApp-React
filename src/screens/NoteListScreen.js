import React, { useState, useMemo, useCallback } from 'react';
import {  TextInput, Button, FlatList, StyleSheet, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../redux/notesSlice';
import NoteItem from '../components/NoteItem';
import ScreenComponent from './ScreenComponent';

const NoteListScreen = () => {
  const [noteContent, setNoteContent] = useState('');
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = useCallback(() => {
    if (noteContent.trim()) {
      dispatch(addNote({
        id: Date.now().toString(),
        content: noteContent
      }));
      setNoteContent('');
    }
  }, [dispatch, noteContent]);

  const renderItem = useMemo(() => ({ item }) => <NoteItem note={item} />, []);

  return (
    <ScreenComponent style={styles.container}>
      <TextInput
        style={styles.input}
        value={noteContent}
        onChangeText={setNoteContent}
        placeholder="Enter note"
      />
      <Button title="Add Note" onPress={handleAddNote} />
      <FlatList
        data={notes}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScreenComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal:Platform.OS==='ios'? 20:0
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default NoteListScreen;