import { useState } from "react";

import "./App.css";

const Todo = props => {
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input type="text"/>
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>;
};

function App() {
  const [todos, setTodos] = useState([
    { id: "todo1", createdAt: "18:00" },
    { id: "todo2", createdAt: "20:30" },
  ]);
  const reverseOrder = () => {
    setTodos([...todos].reverse());
  };
  return (
    <div className="App">
      <button onClick={reverseOrder}>Reverse</button>
      <table>
        <tbody>
          
          {todos.map((todo, index) => {return(
            <Todo key={index} id={todo.id}   createdAt={todo.createdAt} />
            )})}
         
        </tbody>
      </table>
    </div>
  );
}

export default App;
