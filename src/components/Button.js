import PropTypes from "prop-types";
import styled from "styled-components";
import { devices } from "../styles/devices";

function Button({ width, height, bg, hover, text, onClick, children }) {
  return (
    <Btn
      width={width}
      height={height}
      bg={bg}
      hover={hover}
      text={text}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
}

const Btn = styled.button`
  width: ${(props) => props.width}rem;
  height: ${(props) => props.height}rem;
  background-color: ${(props) => props.bg};
  border-radius: 0.5rem;
  font-weight: 700;
  font-size: 1.6rem;
  color: ${(props) => props.text};
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.hover};
    transition: 0.1s;
  }

  @media ${devices.desktop} {
    &:hover {
      background-color: ${(props) => props.hover};
      transition: 0.2s;
    }
  }
`;

Button.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  bg: PropTypes.string.isRequired,
  hover: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
