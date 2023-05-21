
import Card from './components/Card'
import './App.css'

function App() {
  const data=[

    {
      id:1,
      name:"Lake Eola",
      imagelink:"https://bing.com/th?id=OPAN.EE95403FD0850CA1C716AF5B18100B69&w=256&h=256&c=1&o=3&rs=1&oif=webp",
    },
    {
      id:2,
      name:"California Plaza",
      imagelink:"https://bing.com/th?id=OPAN.E5190EB82F001887B96C043FE7AE7277&w=256&h=256&c=1&o=3&rs=1&oif=webps",
    }
  ]
  
  return (
    <>
    {data.map(({name,imagelink})=>{
      return(<Card Title={name} link={imagelink}/>,
      <Card  Title={name} link={imagelink}/>)
        
    })}
   
    
    
    </>
    

  )
  
}

export default App
