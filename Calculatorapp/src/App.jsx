import { useState ,useRef} from 'react'
import './App.css'

function App() {
 const inputRef = useRef(null)
 const resultRef = useRef(null)
 const [result , setResult] = useState(0)

 const plus =(e)=>{
  e.preventDefault();
  setResult((result)=>result + Number(inputRef.current.value))
 }

 const sub =(e)=>{
  e.preventDefault();
  setResult((result)=>result - Number(inputRef.current.value))
 }

 const mul =(e)=>{
  e.preventDefault();
  setResult((result)=>result * Number(inputRef.current.value))
 }

 const divi =(e)=>{
  e.preventDefault();
  setResult((result)=>result / Number(inputRef.current.value))
 }
 const resetInput =(e)=>{
  e.preventDefault();
  inputRef.current.value=0
 }

 const resetResult =(e)=>{
  e.preventDefault();
  setResult((preVal)=>preVal * 0)
  
 }

 

  return (
    <div className="App">
      <div><h1>Simple Working Calculator</h1></div>
      <form action="">
        <p ref={resultRef}>{result}</p>
        <input type="number" pattern='[0-9]' ref={inputRef} placeholder="Type a number"/>
        <button onClick={plus}>add</button>
        <button onClick={sub}>Substract</button>
        <button onClick={mul}>Multiply</button>
        <button onClick={divi}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>    


    </div>
  )
}

export default App
