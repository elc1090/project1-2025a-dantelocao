import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './header/Header.jsx'
import Header from './header/Header.jsx'
import Lista from './lista/Lista.jsx'
import Oferta from './anuncios/Oferta.jsx'
import OfertaDoDia from './anuncios/OfertaDoDia.jsx'
import OfertaEletronicos from './anuncios/OfertaEletronicos.jsx'

function App() {
  return (
    <>
    <Header></Header>
    <Lista></Lista>
    <Oferta></Oferta>
    <OfertaDoDia></OfertaDoDia>
    <OfertaEletronicos></OfertaEletronicos>
    </>
  )
}

export default App
