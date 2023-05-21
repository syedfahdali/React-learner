import { useState } from "react";

import "./App.css";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="goal"
          value={formData.goal}
          placeholder="Goal"
          onChange={changeHandler}
        />
        <input
          type="text"
          name="by"
          value={formData.by}
          placeholder="By..."
          onChange={changeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  function handleRemove(goal) { //this is the function which invokes onremove property from down we pass g and goal accepts the object
    props.onRemove(goal);
  }

  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
          <button onClick={() => handleRemove(g)}>Remove Goal</button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  function removeGoal(goal) {
    const updatedGoals = allGoals.filter((g) => g.goal !== goal.goal);
    updateAllGoals(updatedGoals);
  }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} onRemove={removeGoal} />{/*here onRemove is random property which is being passed removeGoal so it removes the goals which are listed in listofgoals function  */}
    </div>
  );
}

export default App;
