import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const Element=(
  <a
  href='https://google.com' target='_blank'>Visit Google</a>
)
const anotherUser='Ankush Kumar chai aur react'
const reactElement=React.createElement(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
 
    reactElement
  
)
