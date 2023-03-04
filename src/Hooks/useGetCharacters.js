import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetCharacters = (info = "null") => {

   const [characters, setCharacters] = useState()
   const [actualCharacters, setActualCharacters] = useState("https://rickandmortyapi.com/api/character")
   const [nextCharacters, setNextCharacters] = useState(null)
   const [prevCharacters, setPrevCharacters] = useState(null)

   useEffect(() => {
      if (info == "null") {
         axios.get(actualCharacters)
            .then(res => {
               setNextCharacters(res.data.info.next)
               setPrevCharacters(res.data.info.prev)
               setCharacters(res.data)
               window.scrollTo({
                  top: 0,
                  behavior: "smooth",
               })
            })
            .catch(err => console.log(err))
      } else {
         const URL = `https://rickandmortyapi.com/api/character/?name=${info}`
         axios.get(URL)
            .then(res => setCharacters(res.data))
            .catch(err => console.log(err))
      }

   }, [info, actualCharacters])
   return { characters, nextCharacters, prevCharacters, setActualCharacters }
}

export default useGetCharacters