import React from "react";
import ArticleImgMobile from "./assets/Article-Img-Mobile.png";
import ArticleImgDesktop from "./assets/Article-Img-Desktop.png";
import styles from "../read article/ReadArticle.module.css"
import bioImg from "./assets/article-author.png"
import facebook from "./assets/author-facebook.svg"
import whatsapp from "./assets/author-whatsapp.svg"
import instagram from "./assets/footer-instagram.svg"
import twitter from "./assets/author-twitter.svg"
const ArticleHeader = () => {
  return (
    <>
      <header className={styles.articleHeader}>
        <h1 className={styles.mobileOnlyHeading}>Articles</h1>
        <picture>
          <source
            media="(min-width: 768px)"
            className={styles.articleHeaderImg}
            srcSet={ArticleImgDesktop}
          />
          <img
            className={styles.articleHeaderImg}
            src={ArticleImgMobile}
            alt="hero"
          />
        </picture>
        <h1 className={styles.articleHeaderHeading}>
          All you need to know about Noxus AI avatar generator
        </h1>
        <div className={styles.articleBio}>
          <img src={bioImg} alt="" />
          <div>
            <h1>Ihuarulam Caleb</h1>
            <p>November 16, 2022</p>
          </div>
        </div>
        <div className={styles.articleSocials}>
          <a href="/">
            <img src={facebook} alt="" />
          </a>
          <a href="/">
            <img src={whatsapp} alt="" />
          </a>
          <a href="/">
            <img src={instagram} alt="" />
          </a>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </div>
      </header>
    </>
  );
};

export default ArticleHeader;
