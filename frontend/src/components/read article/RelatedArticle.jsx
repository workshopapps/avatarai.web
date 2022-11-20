import React from "react";
import styles from "./ReadArticle.module.css";
import underline from "./assets/Rectangle 6294.svg";
import RA1 from "./assets/RA-1.png";
import RA2 from "./assets/RA-2.png";
import RA3 from "./assets/RA-3.jpeg";
import arrow from "./assets/Read Article.svg";
const RelatedArticle = () => {
  return (
    <>
      <div>
        <img src={underline} alt="" className={styles.underline} />
      </div>
      <div className={styles.RelatedArticleHeader}>
        <h1>Related Articles</h1>
        <a href="/">See all articles</a>
      </div>
      <section className={styles.articleCards}>
        <article className={styles.articleCard}>
          <div className={styles.articleImgContainer}>
            <img src={RA1} alt="" />
          </div>

          <p className={styles.articleDate}>November 18, 2022</p>
          <h1>
            How AI avatars are providing an extra layer of online security
          </h1>
          <p>
            AI avatars helps businesses and are widely used in e-commerce and
            marketing
          </p>
          <a href="/">
            <span>Read Article</span> <img src={arrow} alt="" />
          </a>
        </article>
        {/* second card */}
        <article className={styles.articleCard}>
          <div className={styles.articleImgContainer}>
            <img src={RA2} alt="" />
          </div>
          <p className={styles.articleDate}>November 16, 2022</p>
          <h1>
            Understanding the Next-Gen Artificial Intelligence Development
          </h1>
          <p>
            Digital avatars are used to ehance human Interactions through
            virtual profiles
          </p>
          <a href="/">
            <span>Read Article</span> <img src={arrow} alt="" />
          </a>
        </article>
        {/* third card */}
        <article className={styles.articleCard}>
          <div className={styles.articleImgContainer}>
            <img src={RA3} alt="" />
          </div>
          <p className={styles.articleDate}>November 14, 2022</p>
          <h1>Copresence With Virtual Humans in Mixed Reality:</h1>
          <p>
            Augmented reality gives developers the ability to spatially position
            AR object
          </p>
          <a href="/">
            <span>Read Article</span> <img src={arrow} alt="" />
          </a>
        </article>
      </section>
    </>
  );
};

export default RelatedArticle;
