

import './App.css'
const Button= ({children ,backgroundColor})=>{
  return(<button style={{backgroundColor}}>{children}</button>)//what the children is doing is taking Delete as text and moving it in Button function
}
const Alert =({children})=>{
  return(
    <>
      <div className="Overlay">

      </div>
      <div className="Alert">{children}</div>
    </>

  )
}
const DeleteButton=()=>{
  return <Button backgroundColor="seagreen" >Delete</Button>//this Delete text is passed as children to Button and backgroundColor as property
}

function App() {
 

  return (
    <div className="App">
     <header>Little Lemon Restaurant</header>
     <Alert>
      <h4>Delete Account</h4>{/*we cant do anything to the alert until we dont pass the children to it all text inside the Alert is passed as children to Above Alert function */}
      <p>
        Are you sure you want to proceed?
        You will miss all your delicious recipes!
      </p>
      <DeleteButton/>
     </Alert>
     
    </div>
  )
}

export default App
