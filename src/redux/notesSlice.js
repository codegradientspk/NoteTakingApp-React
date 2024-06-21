import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadNotes = createAsyncThunk('notes/loadNotes', async () => {
  const jsonValue = await AsyncStorage.getItem('notes');
  return jsonValue != null ? JSON.parse(jsonValue) : [];
});

export const saveNotes = createAsyncThunk('notes/saveNotes', async notes => {
  const jsonValue = JSON.stringify(notes);
  await AsyncStorage.setItem('notes', jsonValue);
});

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    deleteNote: (state, action) => {
      return state.filter(note => note.id !== action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(loadNotes.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {addNote, deleteNote} = notesSlice.actions;
export default notesSlice.reducer;
