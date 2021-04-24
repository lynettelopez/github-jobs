import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/desktop/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../images/desktop/icon-moon.svg";
// import HeaderImageDesktop from "../../assets/desktop/bg-pattern-header.svg";
import HeaderImageMobile from "../../images/mobile/bg-pattern-header.svg";
// import HeaderImageTablet from "../../assets/tablet/bg-pattern-header.svg";
import { colors } from "../../styles/theme";

function Header({ mode, toggleMode }) {
  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">github jobs</Link>
      </Title>
      <Toggle>
        <SunIcon fill={colors.white} />
        <Input id="toggle" type="checkbox" mode={mode} onClick={toggleMode} />
        <Label htmlFor="toggle" mode={mode} />
        <MoonIcon fill={colors.white} />
      </Toggle>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

const HeaderWrapper = styled.header`
  height: 13.6rem;
  background-image: url(${HeaderImageMobile});
  display: flex;
`;

const Title = styled.h1`
  padding: 3.2rem 0 0 2.4rem;
  font-size: 3rem;

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;

const Toggle = styled.div`
  position: relative;
  width: 11.2rem;
  height: 2.4rem;
  padding: 3.6rem 0 0 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  position: absolute;
  left: 9.1rem;
  width: 4.8rem;
  height: 2.4rem;
  background-color: ${colors.white};
  border-radius: 1.2rem;

  ::after {
    content: "";
    position: absolute;
    top: 0.5rem;
    left: ${(props) => (props.mode === "light" ? ".5rem" : "2.9rem")};
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background-color: ${colors.violet};
    transition: 0.3s;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  cursor: pointer;

  /* 
  :hover + ${Label}::after {
    background-color: ${colors.lightViolet};
  } */

  :checked + ${Label}::after {
    left: ${(props) => (props.mode === "light" ? ".5rem" : "2.9rem")};
  }
`;

export default Header;
