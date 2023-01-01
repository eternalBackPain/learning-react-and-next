import React from "react";
import ArticleList from "./ArticleList";
import Link from "next/link";
import articleStyles from "../styles/Articles.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link
      href="/article/[id]"
      as={`/article/${article.id}`}
      className={articleStyles.card}
    >
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
