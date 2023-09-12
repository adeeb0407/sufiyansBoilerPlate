import React, {useState} from 'react'
import AboutData from '../../components/AboutData/AboutData'
import BasicAccordion from '../../components/AboutData/BasicAccordion'
import { Home } from '@mui/icons-material'
import HomeTable from '../../components/HomeTable/HomeTable'

function About() {

  const [counter, setCounter] = useState(0)
  const [textColor, setColor] = useState("red")

  const increment = () => {
    setCounter(counter + 1)
    setColor("green")
  }

  const decriment = () => {
    setCounter(counter - 1)
  }
  return (
    //Importing Components
    <div style={{textAlign: 'center'}}>
      <h1 style={{color: textColor}}>{counter}</h1>
      <button onClick={decriment}>-</button>
      &nbsp;
      &nbsp;
      &nbsp;
      {/* <button onMouseMove={increment}>+</button> */}

      <AboutData incrementFunc={increment}/>
    {/* condition rendring with ternary operator having multiple conditions */}
    <div >
      {counter >= 10 ? <BasicAccordion /> : counter >= 5 ? <h1>Hello</h1> : 'Waiting for counter to react 5'}
    </div>
    </div>
    
  )
}

export default About