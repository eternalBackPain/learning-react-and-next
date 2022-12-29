import React from "react";

const Button = ({color, text}) => {
    //Here we're making the component reusable - the props are passed in as parameters and JS and CSS is imported (CSS syntax as camelCase and double curly brackets)
  return <button style={{backgroundColor: color}} className="btn">{text}</button>;
};

export default Button;
