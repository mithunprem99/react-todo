import { useState  } from 'react';
import './App.css';
import { AddTodo } from './component/AddTodo';
import { TodoItems } from './component/TodoItems';
function App() {
  const [todo,setTodo] = useState([])
  const getItem = (item) =>{
    // console.log(item)
    setTodo((prevState)=>{
      return [...prevState,item]
    })
  }
  const getCompleted = (id) =>{
    console.log(id);
    setTodo((prevState)=>{
      return prevState.filter((item, index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div className='todo'>
      
      <AddTodo item = {getItem}/>
      {todo && todo.map((todo, index) =>(
      <TodoItems id={index} item = {todo} completed={getCompleted}/>
      ))}
    </div>
  );
}

export default App;
