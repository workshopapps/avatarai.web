import style from "./faqHero.module.css";
import { useState, useEffect } from "react";
import Button from "../../landingPage/Button/Button";

const getInnerWidth = () => { 
  const { innerWidth } = window;
  return innerWidth;
};

const FaqHero = () => {
  const [searchText, setSearchText] = useState('');
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

  const onSubmit = (e) => {
    e.preventDefault()
    setSearchText('')
  }

  return (
    <section
      className={style.heroContainer}
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062331/herobg_yytctl.png")`,
      }}
    >
      <div className={style.centered}>
        <h2>Frequently Asked Questions</h2>
        <p>Have questions? We are here to help.</p>
        <form onSubmit={onSubmit} className={style.form}>
          <div
            className={style.searchIcon}
            style={{
              backgroundImage: `url("https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062331/searchIcon_nivpev.png")`,
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
          <Button type="submit">
            {innerWidth < 480 ? (
              <div
                style={{
                  backgroundImage: `url("https://res.cloudinary.com/dzqaqbrng/image/upload/v1670062330/buttonSearch_lbctxk.png")`,
                  width: "20px",
                  height: "20px",
                }}
              ></div>
            ) : (
              "Search"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default FaqHero;
