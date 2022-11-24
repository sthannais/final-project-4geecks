import React from "react";
import PropTypes from "prop-types";

const Button = ({ onClick, className, text }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default Button;
