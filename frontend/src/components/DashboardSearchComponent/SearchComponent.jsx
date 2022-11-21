import { useEffect, useState } from "react"

import useSpeechRecognition from "./hooks/useSpeechRecognition"

import style from './searchComponent.module.css'

import search from './assets/search.png'
import microphone from './assets/microphone.svg'


export default function SearchComponent () {

  const [searchValue, setSearchValue] = useState('')
  const {recognition, speech} = useSpeechRecognition()
  
  useEffect(()=>{
    setSearchValue(speech)
  },[speech])
  

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      setSearchValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit()} className={style.form}
    data-testid='form'
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search collections"
        className={style.searchInput}
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        />
      <button type="submit" className={style.search}
        style={{
          backgroundImage: `url(${search})`,
        }}
        onClick={()=>recognition.stop()}
      ></button>
      <button
        className={style.microphone}
        style={{
          backgroundImage: `url(${microphone})`,
        }}
        onClick={()=>{
          const m = document.querySelector(`.${style.microphone}`)
          m.classList.add(style.ongoingSpeech)
          recognition.start()
          setTimeout(()=>{
            m.classList.remove(style.ongoingSpeech)
            recognition.stop()
          }, 5000)
        }}
      ></button>
    </form>
  );
}