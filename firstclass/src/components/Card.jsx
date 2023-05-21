import React from 'react'

const Card = ({Title,link}) => {
    
  return (
     <div className='card1'>
        <h1>{Title}</h1>
        <img src={link} alt="image" />
        <h4>book now </h4>
        <button>Visit</button>
        
     </div>
  )
}

export default Card