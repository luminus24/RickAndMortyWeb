import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Input from './components/Input'

function App() {

  const [characterName, setCharacterName] = useState()

  return (
    <div className="App">
      <h1>Rick And Morty Web</h1>
      <Input setCharacterName= {setCharacterName}/>
      <Cards characterName = {characterName}/>
    </div>
  )
}

export default App
