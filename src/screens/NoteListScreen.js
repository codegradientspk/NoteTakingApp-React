import React, {useState, useMemo, useCallback} from 'react';
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addNote, deleteNote, saveNotes} from '../redux/notesSlice';
import NoteItem from '../components/NoteItem';
import ScreenComponent from './ScreenComponent';
import ButtonComponent from '../components/ButtonComponent';
import colors from '../utils/colors';
import Header from '../components/Header';

const NoteListScreen = () => {
  const [noteContent, setNoteContent] = useState('');
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();

  const handleAddNote = useCallback(() => {
    if (noteContent.trim()) {
      const newNote = {
        id: Date.now().toString(),
        content: noteContent,
      };
      dispatch(addNote(newNote));
      dispatch(saveNotes([...notes, newNote]));
      setNoteContent('');
    }
  }, [dispatch, noteContent, notes]);

  const handleDeleteNote = useCallback(
    id => {
      const updatedNotes = notes.filter(note => note.id !== id);
      dispatch(deleteNote(id));
      dispatch(saveNotes(updatedNotes));
    },
    [dispatch, notes],
  );

  const renderItem = useMemo(
    () =>
      ({item}) =>
        <NoteItem note={item} onDelete={() => handleDeleteNote(item.id)} />,
    [handleDeleteNote],
  );

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <ScreenComponent style={styles.container}>
        <Header title={'Note Taking App'} />
        <View style={styles.rowDirection}>
          <TextInput
            style={styles.input}
            value={noteContent}
            onChangeText={setNoteContent}
            placeholder="Enter note"
            placeholderTextColor={colors.black}
          />
          <ButtonComponent text="Add Note" onPress={handleAddNote} />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={notes}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </ScreenComponent>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginHorizontal: Platform.OS === 'ios' ? 20 : 0,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.silver,
    padding: 10,
    marginBottom: 10,
    marginEnd: 10,
    height: 40,
    color: colors.black,
  },
  rowDirection: {
    flexDirection: 'row',
  },
});

export default NoteListScreen;
