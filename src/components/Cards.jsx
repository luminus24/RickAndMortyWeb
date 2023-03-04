import React, { useState } from 'react'
import useGetCharacters from '../Hooks/useGetCharacters'
import "../styles/cardStyles.css"
import "../styles/paginationStyles.css"

const Cards = ({ characterName }) => {
   const [count, setCount] = useState(1)
   const { characters, nextCharacters, prevCharacters, setActualCharacters } = useGetCharacters(characterName)
   const OnclickNext = () => {
      setCount(count + 1)
      setActualCharacters(nextCharacters)
   }

   const OnclickPrev = () => {
      if (count > 0) {
         setCount(count - 1)
      }
      setActualCharacters(prevCharacters)
   }
   return (
      <>
         <div className='card'>
            {
               characters?.results.map((character) => (
                  <div key={character?.id} className="card-container">
                     <img src={character?.image} alt="character image" className='img-character' />
                     <h1 className='title'>{character?.name}</h1>
                     <div className='status-container'>
                        <div className={`${character?.status} status`}></div>
                        <h4 >{character?.status}</h4>
                     </div>
                     <div>
                        <div className='genero'>
                           <h4>Gènero: </h4>
                           <span> {character?.gender}</span>
                        </div>
                        <div className='localizacion'>
                           <h4>Localización: </h4>
                           <span>{character?.location.name}</span>
                        </div>
                        <div className='episodios'>
                           <h4>Episodios: </h4>
                           <span>{character?.episode.length}</span>
                        </div>
                     </div>
                  </div>
               ))
            }
         </div>
         <div className='pagination'>
            <button onClick={OnclickPrev}>Prev</button>
            <div className='page'>{count}</div>
            <button onClick={OnclickNext}>Next</button>
         </div>
      </>
   )
}
export default Cards