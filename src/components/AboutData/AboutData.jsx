import React from 'react'
import './aboutData.css'

function AboutData({incrementFunc}) {
  //javascript
  let data = 'AboutData'
  //HTML CSS
  return (
    <div>

      <button onClick={incrementFunc}>+</button>
    </div>
    
  )
}

export default AboutData