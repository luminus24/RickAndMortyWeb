import React from 'react'
import useGetCharacters from '../Hooks/useGetCharacters'
import "../styles/cardStyles.css"

const Cards = ({ characterName }) => {

   const characters = useGetCharacters(characterName)

   return (
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
   )
}
export default Cards