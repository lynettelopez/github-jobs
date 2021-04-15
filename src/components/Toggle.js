import styled from "styled-components";
import { colors } from "../styles/theme";
import { convertPxToVw } from "../utils";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";

const ToggleWrapper = styled.div`
  position: relative;
  width: 112px;
  height: 24px;
  padding: ${convertPxToVw(36)}vw 0 0 ${convertPxToVw(55)}vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  position: absolute;
  left: ${convertPxToVw(91)}vw;
  width: 48px;
  height: 24px;
  background-color: ${colors.white};
  border-radius: 12px;

  ::after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${colors.violet};
    transition: 0.3s;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  width: 48px;
  height: 24px;
  border-radius: 12px;
  cursor: pointer;

  :checked + ${Label}::after {
    left: 29px;
  }
`;

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ToggleWrapper>
      <img src={SunIcon} alt="White icon of a sun" />
      <Input id="toggle" type="checkbox" />
      <Label htmlFor="toggle" />
      <img src={MoonIcon} alt="White icon of a moon" />
    </ToggleWrapper>
  );
};

export default Toggle;
