import React, { Children } from "react";
import Nav from "./Nav";
import Header from "./Header";

//To use styles, import it then reference it in className as if it were an object
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
