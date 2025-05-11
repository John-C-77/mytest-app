import Styles from "./Button.module.css";

import PropTypes from "prop-types";

function Button({ text }) {
  return <button className={Styles.title}>{text}</button>;
}

Button.prototype = {
  text: PropTypes.string.isRequired,
};

export default Button;
