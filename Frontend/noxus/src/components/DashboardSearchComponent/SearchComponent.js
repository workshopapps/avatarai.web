import { useState } from "react"


import style from './searchComponent.module.css'

import search from './assets/search.png'
import microphone from './assets/microphone.svg'


export default function SearchComponent () {

  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault()
      setSearchValue('')
    }
  }

  return (
    <form onSubmit={handleSubmit()} className={style.form}>
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
      ></button>
      <button
        className={style.microphone}
        style={{
          backgroundImage: `url(${microphone})`,
        }}
      ></button>
    </form>
  );
}