import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Test Application to learn <span>Nextjs</span>
      </h1>
      <p className={headerStyles.description}>Ello governer</p>
    </div>
  );
};

export default Header;
