import { useEffect, useState } from "react";

import SpeechRecognition from "./helper/SpeechRecognition";

import style from "./searchComponent.module.css";

import search from "./assets/search.png";
import microphone from "./assets/microphone.svg";
import { browserIsFirefox } from "./helper/helper";

export default function SearchComponent() {
  const [searchValue, setSearchValue] = useState("");
  const [sr, setSr] = useState({});

  useEffect(() => {
    if (!browserIsFirefox()) {
      setSr(SpeechRecognition(setSearchValue));
    }
  }, []);

  const handleSubmit = () => {
    return (e) => {
      e.preventDefault();
      setSearchValue("");
    };
  };

  return (
    <form onSubmit={handleSubmit()} className={style.form} data-testid="form">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search collections"
        className={style.searchInput}
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
      <button
        type="submit"
        className={style.search}
        style={{
          backgroundImage: `url(${search})`,
        }}
        onClick={() => handleSubmit()}
      />
      <button
        className={style.microphone}
        style={{
          backgroundImage: `url(${microphone})`,
          display: `${browserIsFirefox() ? "none" : "block"}`,
        }}
        onClick={() => {
          const m = document.querySelector(`.${style.microphone}`);

          m.classList.add(style.ongoingSpeech);
          sr.recognition.start();
          setTimeout(() => {
            m.classList.remove(style.ongoingSpeech);
            sr.recognition.stop();
          }, 5000);
        }}
      />
    </form>
  );
}
