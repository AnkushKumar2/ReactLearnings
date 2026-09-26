import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  
  // const myObj={
  //   username:"Ankush Kumar",
  //   age:22
  // }
  // const myArr=[1,2,3]

  return (
    <>
      <h1 className='bg-green-300 text-red-600 p-4 rounded-xl ' >Tailwind test</h1>
      <Card username="Bittu" btnText="click me"/>
      <Card username="Ankush Kumar" btnText="visit me"/>
    </>
  )
}

export default App
