import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetCharacters = () => {

   const [characters, setCharacters] = useState()

   useEffect(() => {
      const URL = "https://rickandmortyapi.com/api/character"
      axios.get(URL)
         .then((res) => setCharacters(res.data.results))
         .catch(err => console.log(err))
   }, [])
   return(characters)
}

export default useGetCharacters