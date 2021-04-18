import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../styles/theme";

const Btn = styled.button`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${colors.violet};
  border-radius: 5px;
  color: ${colors.white};
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
`;

function Button(props) {
  return (
    <Btn width={props.width} height={props.height}>
      {props.children}
    </Btn>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Button;
