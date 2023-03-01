import React, {useState} from 'react';
import { Button } from '@mui/material';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]); 
  const [input, setInput] = useState('');

  const addTodo = (event) => {
    // this will fire off when we click the button
    event.preventDefault(); //will stop the refresh
    setTodos([...todos, input]);
    console.log(setTodos);
    setInput(''); //clear up input after clicking add todo button
  }

  return (
    <div className="App">
      <h1>Hello Coders !!</h1>
      <form>
      <input value={input} onChange={event => setInput(event.target.value)}/>
      <Button type="submit" onClick={addTodo} variant="contained">Add Todo</Button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
