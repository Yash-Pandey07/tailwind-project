import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display : "flex" , justifyContent : "center"}} >
          <div style={{backgroundColor: "red"}}>H1</div>
          <div style={{backgroundColor: "blue"}}>H2</div>
          <div style={{backgroundColor: "green"}}>H3</div>
      </div>
      <div className='flex justify-center'>
          <div style={{backgroundColor: "red"}}>H1</div>
          <div style={{backgroundColor: "blue"}}>H2</div>
          <div style={{backgroundColor: "green"}}>H3</div>
      </div>
    </>
  )
}

export default App
