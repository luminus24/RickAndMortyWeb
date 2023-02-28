import React from 'react'
import useGetCharacters from '../Hooks/useGetCharacters'

const Cards = ({characterName}) => {

   const characters = useGetCharacters(characterName)
   console.log(characters)
   return (
      <div>
         {
            characters?.results.map((character) =>(
               <div key={character?.id}>
                  <h1>{character?.name}</h1> {/*nombre*/}
                  <img src={character?.image} alt="character image" />
                  <h4>{character?.status}</h4> {/*estado*/}
                  <h3>{character?.gender}</h3> {/*genero*/}
                  <h3>{character?.location.name}</h3> {/*localizacion*/}
                  <h3>{character?.episode.length}</h3> {/*episodios en los que aparece*/}

               </div>
            ))
         }
      </div>
   )
}

export default Cards