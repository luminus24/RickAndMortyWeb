import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'
import Input from './components/Input'
import portada from "./assets/rick-and-Morty-portada.jpg"

function App() {

  const [characterName, setCharacterName] = useState()

  return (
    <div className="App">
      <img src={portada} alt="tmr" className='portada'/>
      <Input setCharacterName= {setCharacterName}/>
      <Cards characterName = {characterName}/>
    </div>
  )
}

export default App
