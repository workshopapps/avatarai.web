import React from "react";
import styles from "./ReadArticle.module.css";
import ArticleHeader from "./ArticleHeader";
import ArticleBody from "./ArticleBody";
import RelatedArticle from "./RelatedArticle";
const ReadArticle = () => {
  return (
    <main className={styles.container}>
      <ArticleHeader />
      <ArticleBody />
      <RelatedArticle />
    </main>
  );
};

export default ReadArticle;
