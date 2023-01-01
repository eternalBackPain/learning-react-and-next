//This is the home page

//Used for metatags, keywords, etc. You can do this within each page (esp to fix title)
import Head from "next/head";

import ArticleList from "../components/ArticleList"

//You can apply css to each component by importing a <component>.module.css file
//import styles from '../styles/Home.module.css'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Test app</title>
        <meta name="keywords" content="web dev, testing" />
      </Head>
      <ArticleList articles={articles}/>
    </div>
  );
}

//To use getStaticProps, fetch the data and pass the response as a prop
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  const articles = await res.json();
  return {
    props: { articles },
  };
};
