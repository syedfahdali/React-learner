import './App.css'
import React from 'react'
function App() {
  const time= new Date()
  let dayMessage
  const day = time.toLocaleString("en-us",{weekday:"long"})
  const morning= time.getHours()>= 6 && time.getHours() <=12
  if(day.toLowerCase()=== "monday"){
    dayMessage = `Happy ${day}`
  }
  else if (day.toLowerCase()=== "tuesday"){
    dayMessage= `${day}, four days to go `
  }
  else if ( day.toLowerCase()=== "wednesday"){
    dayMessage=`${day},half way there`
  }
  else if ( day.toLowerCase()=== "thursday"){
    dayMessage=`${day},start planning the weekend`
  }
  else if ( day.toLowerCase()=== "friday"){
    dayMessage=`Woo-hoo, the weekend is coming!`
  }
  else if ( day.toLowerCase()==="saturday"){
    dayMessage="Stay cam and keep having fun "
  }
  else{
    dayMessage="Start worrying"
  }
  return (
    <div className="App">
      <h1>{dayMessage}</h1>
      {morning ? <h1>Good morning</h1>:<h1>Good AfterNoon</h1> }
    </div>
  )
}

export default App
