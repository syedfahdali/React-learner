import React from 'react'
import './App.css'
import { useState } from 'react'


function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(Number(score)<= 5 && comment.length<=10){
      alert("Please provide a comment why the experience is poor")
      return;
    }
    console.log("Form submitted");
    setComment("");
    setScore("10");
  };
  const feedSubmit=(event)=>{
    setComment("")
  }
  const feedChange=(event)=>{
    setComment(event.target.value)
  }
  
  const handlechange = (e) => {
    setScore(e.target.value);
  };

  const [score , setScore ]=useState("10")
  const [comment , setComment]=useState("")
  return (
    <>
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <h2>Feedback form</h2>
        <div className="field">
          <label htmlFor="">Score:{score}*</label>
          <input type="range" min="0" max="10" value={score} onChange={handlechange}/>

        </div>
      </form>
    </div>
    <div className="Field2" onSubmit={feedSubmit}>
      <label htmlFor="">Comments</label>
      <textarea value={comment} onChange={feedChange}></textarea>
      <button >Submit</button>
      
    </div>
    </>
  )
}

export default App



