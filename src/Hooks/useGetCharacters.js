import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGetCharacters = (info= "null") => {

   const [characters, setCharacters] = useState()

   useEffect(() => {
      if(info == "null"){
         const URL = "https://rickandmortyapi.com/api/character"
         axios.get(URL)
         .then((res) => setCharacters(res.data))
         .catch(err => console.log(err))
      }else{
         const URL = `https://rickandmortyapi.com/api/character/?name=${info}`
         axios.get(URL)
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
      }
   }, [info])
   return(characters)
}

export default useGetCharacters