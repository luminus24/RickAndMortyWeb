import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Input from './components/Input'

function App() {

  return (
    <div className="App">
      <h1>Rick And Morty Web</h1>
      <Input/>
      <Cards/>
    </div>
  )
}

export default App
