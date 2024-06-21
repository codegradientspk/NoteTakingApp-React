import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import {store} from './src/redux/store';
import NoteListScreen from './src/screens/NoteListScreen';
import {loadNotes} from './src/redux/notesSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadNotes());
  }, [dispatch]);

  return <NoteListScreen />;
};

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
