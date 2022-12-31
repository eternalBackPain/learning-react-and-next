import React from "react";
import Button from "./Button";

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button text="Add" color="green" onClick={onAdd} />
    </header>
  );
};

export default Header;
