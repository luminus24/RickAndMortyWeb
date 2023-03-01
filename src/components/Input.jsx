import React from 'react'
import "../styles/inputStyles.css"

const Input = ({setCharacterName}) => {

   const handleSubmit = e =>{
      e.preventDefault()
      setCharacterName(e.target.searchCharacter.value.trim().toLowerCase())

   }

   return (
         <form onSubmit={handleSubmit} className="search-form">
            <input id="searchCharacter" className='input-search' type="text" placeholder='Nombre del personaje'/>
            <button className='button'>Buscar</button>
         </form>
   )
}

export default Input