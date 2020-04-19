import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import styles from "./Button.module.scss";

const Btn = styled.button`
  background-color: ${(props) => props.bgColor};
`;

const Button = (props) => {
  const { text, bgColor, className, onClick, children, isAnimationOn } = props;
  return (
    <Btn
      className={className}
      bgColor={bgColor}
      onClick={onClick}
      type="button"
    >
      {isAnimationOn ? children : null}
      {text}
    </Btn>
  );
};

Button.defaultProps = {
  bgColor: "#135afe",
  children: null,
  className: styles.defaultButton,
  isAnimationOn: false,
};

Button.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  isAnimationOn: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
