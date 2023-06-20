import { useState  } from 'react';
import './App.css';
import { AddTodo } from './component/AddTodo';
import { TodoItems } from './component/TodoItems';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <AddTodo />
      <TodoItems />
      </header>
    </div>
  );
}

export default App;
