import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [toggle, setToggle] = useState(false)
  const clickhandler=(e)=>{
    setToggle(!toggle)
  }
  useEffect(()=>{
   
    document.title= toggle ? "Welcome to Little Lemon":"Good Bye";
  },[ toggle])//the dependency array checks for the value of toggle and reinvokes the function to change the value
  return (
    <div className="App">
      <h1>Using the UseEffect Hook</h1>
      <button onClick={clickhandler}>
        Toggle message
      </button>
      {toggle&& <h2>Welcome to little lemon</h2> }{/*Both are true because both exist in this coding space  */}
    </div>
  )
}

export default App
