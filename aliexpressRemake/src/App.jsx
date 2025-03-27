import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './header/Header.jsx'
import Header from './header/Header.jsx'
import Lista from './lista/Lista.jsx'

function App() {
  return (
    <>
    <Header></Header>
    <Lista></Lista>
    <h1> aliexpress</h1>
    </>
  )
}

export default App
