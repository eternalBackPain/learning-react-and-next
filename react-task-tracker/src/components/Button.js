import React from "react";
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  //Here we're making the component reusable - the props are passed in as parameters and JS and CSS is imported (CSS syntax as camelCase and double curly brackets)
  return (
    <button style={{ backgroundColor: color }} className="btn">
      {text}
    </button>
  );
};

//defining default props
Button.defaultProps = {
  colour: 'steelblue',
}

//using proptypes (need to import it first as above)
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}

export default Button;
