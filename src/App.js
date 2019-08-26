import React from 'react';
import './App.css';

// redux store setup
import { Provider } from 'react-redux';
import store from './store/store';

// layouts
import Navbar from './components/layouts/Navbar';
import Todos from './components/todos/Todos';
import AddTodo from './components/todos/AddTodo';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <div className="container">
          <AddTodo />
          <Todos />
        </div>
      </div>
    </Provider>
  );
}

export default App;
