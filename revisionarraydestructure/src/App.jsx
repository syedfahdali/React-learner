import { useState } from "react";

import "./App.css";

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value }); //this is required because of the shallow copy which is needed to be made by spread operator .event is self provided event objects contains peices of data
    //[ ] these brackets cause dynamic data allocation as in example for goal and by this single line does both for goal and by .
  }
  function submitHandler(e) {//this e is an object which contains the key values of props(onAdd) property
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });//this resets it to default value
  }
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler}>{/*this also fires an event thus creating an event object and submithandler accepts it as e .When submithandler is invoked it accepts the values of goal and by objects which are passed as properties to the function in event object */}
        <input
          type="text"
          name="goal"
          value={formData.goal}
          placeholder="Goal"
          onChange={changeHandler}//when we start writing we fire onchange event which makes an event object and changehandler accepts it as e
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
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [allGoals, updateAllGoals] = useState([]);// in this special scenerio we need a collection which is array of objects
  function addGoal(goal) { //this is also and event object which accepts the values of allgoals in updateAllGoals by the use of spread operator ...
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />{/* function GoalForm props can now access addgoal function this is a type of function passed in function and onAdd is just a property  */}
      <ListOfGoals allGoals={allGoals} />{/*so this makes it hard but we are directly passing the props allGoals which passed allGoals of current function to ListofGoals */}
      
    </div>
  );
}

export default App;
