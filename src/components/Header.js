import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/theme";
import { convertPxToVw } from "../utils";
import HeaderImageMobile from "../assets/mobile/bg-pattern-header.svg";
// import HeaderImageTablet from "../assets/tablet/bg-pattern-header.svg";
// import HeaderImageDesktop from "../assets/desktop/bg-pattern-header.svg";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";

const HeaderWrapper = styled.div`
  height: ${convertPxToVw(136)}vw;
  background-image: url(${HeaderImageMobile});
  display: flex;
`;

const Title = styled.h1`
  padding: ${convertPxToVw(32)}vw 0 0 ${convertPxToVw(24)}vw;
  font-size: ${convertPxToVw(30)}vw;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const Toggle = styled.div`
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
    left: ${(props) => (props.mode === "light" ? "5px" : "29px")};
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
    left: ${(props) => (props.mode === "light" ? "5px" : "29px")};
  }
`;

const Header = (props) => {
  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">github jobs</Link>
      </Title>
      <Toggle>
        <img src={SunIcon} alt="White icon of a sun" />
        <Input
          id="toggle"
          type="checkbox"
          mode={props.mode}
          onClick={props.toggleMode}
        />
        <Label htmlFor="toggle" mode={props.mode} />
        <img src={MoonIcon} alt="White icon of a moon" />
      </Toggle>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

export default Header;
