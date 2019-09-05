import React, { useState } from 'react';
import { AppContextProvider } from './context/AppContext';
import { Counter, TodoList, TodoListInput} from './components';
import './App.css';

const App = () => {
  const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => {
    setShowCounter(!showCounter);
  };

  return (
    <AppContextProvider>
      <h1>Greetings from Wynwood.</h1>
      {showCounter ? <Counter /> : <h1>Counter Has Been Unmounted</h1>}
      <button onClick={toggleCounter}>
        {showCounter ? 'Hide Counter' : 'Show Counter'}
      </button>
      <TodoListInput />
      <TodoList />
    </AppContextProvider>
  );
};
export default App;

