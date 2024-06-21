import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import NoteListScreen from './src/screens/NoteListScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NoteListScreen />
    </Provider>
  );
};

export default App;