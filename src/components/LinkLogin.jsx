import React from "react";
import PropTypes from "prop-types";

const LinkLogin = ({ onClick, className, text }) => {
  return (
    <a className={className} onClick={onClick}>
      {text}
    </a>
  );
};

LinkLogin.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string.isRequired,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default LinkLogin;
