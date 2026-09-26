import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter]=useState(15)

  




  //let counter=5
  // const addValue=()=>{
  //   if(counter<20){
        //in these useState executes file in batches thats why no matter how many times we call the setCounter func it is not taking prev values thus it will execute in batches not one by one
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //     setCounter(counter+1)
  //     setCounter(counter+1)

  //   }
    const addValue=()=>{
      if(counter<20){
        //in these the setCounter is taking the prevCounter every time and updating them with 1 every time 
        setCounter(prevCounter=>prevCounter+1)
         setCounter(prevCounter=>prevCounter+1)
          setCounter(prevCounter=>prevCounter+1)
           setCounter(prevCounter=>prevCounter+1)
      }
    
    
  }
  const removeValue=()=>{
    if(counter>0){
       setCounter(counter-1)
    }
   
   
  }

  return (
    <>

    <h1>
      chai aur react
    </h1>
    <h2>Counter value:{counter}</h2>
    <button
    onClick={addValue}
    >Add Value{counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value{counter}</button>
    
    
    </>
  )
}

export default App
