import heroBg from "./heroBg.svg";
import style from "./faqHero.module.css";
import searchIcon from "./searchIcon.svg";
import buttonSearch from "./buttonSearch.svg";
import { useState, useEffect } from "react";

const getInnerWidth = () => {
  const { innerWidth } = window;
  return innerWidth;
};
const FaqHero = () => {
  const [searchText, setSearchText] = useState();
  const [innerWidth, setInnerWidth] = useState(getInnerWidth());

  useEffect(() => {
    function handleWindowResize() {
      setInnerWidth(getInnerWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section
      className={style.heroContainer}
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className={style.centered}>
        <h2>Frequently Asked Questions</h2>
        <p>Have questions? We are here to help.</p>
        <form onSubmit={(e) => e.preventDefault()} className={style.form}>
          <div
            className={style.searchIcon}
            style={{
              backgroundImage: `url(${searchIcon})`,
            }}
          ></div>
          <input
            type="text"
            autoComplete="false"
            value={searchText}
            onChange={({ target }) => setSearchText(target.value)}
            placeholder={`Type keyword${
              innerWidth > 480 ? " to find answer" : "..."
            }`}
            className={style.input}
          />
          <button>{innerWidth < 480 ? <div
          style={{
            backgroundImage: `url(${buttonSearch})`,
            width: '20px',
            height: '20px'
          }}>
          </div> : "Search"}</button>
        </form>
      </div>
    </section>
  );
};

export default FaqHero;
