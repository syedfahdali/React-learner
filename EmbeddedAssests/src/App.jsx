import { useState } from 'react'
import lake from './assets/pexels-james-wheeler-417074.jpg'
import lake2 from './assets/pexels-dakota-gillette-89749.jpg'
import lake3 from './assets/pexels-pixabay-259881.jpg'
import ReactPlayer from 'react-player'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const vidUrl="https://youtu.be/ZPb10kOQv0c"
  return (
    <div className="App">
      <h1>
        Task: add three images with some styling
      </h1>
      <div className='flex'>
        <img className='image1' height={200} src={lake} alt="an image of lake" />
        <img height={200} className='image2' src={lake2} alt="an image of lake" />
        <img height={200} className='image2' src={lake3} alt="an image of lake" />
      </div>
      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={0.5}
        playIcon={true}
        playsinline={true}
      
      />
    </div>
  )
}

export default App
