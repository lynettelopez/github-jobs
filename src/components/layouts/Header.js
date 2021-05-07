import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as SunIcon } from "../../images/desktop/icon-sun.svg";
import { ReactComponent as MoonIcon } from "../../images/desktop/icon-moon.svg";
import HeaderImageDesktop from "../../images/desktop/bg-pattern-header.svg";
import HeaderImageMobile from "../../images/mobile/bg-pattern-header.svg";
import HeaderImageTablet from "../../images/tablet/bg-pattern-header.svg";
import { devices } from "../../styles/devices";
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

const HeaderWrapper = styled.header`
  height: 13.6rem;
  background-image: url(${HeaderImageMobile});
  background-size: cover;
  display: flex;

  @media ${devices.tablet} {
    height: 16rem;
    background-image: url(${HeaderImageTablet});
  }

  @media ${devices.desktop} {
    height: 16.2rem;
    background-image: url(${HeaderImageDesktop});
  }
`;

const Title = styled.h1`
  padding: 3.2rem 0 0 2.4rem;
  font-size: 3rem;
  line-height: 3rem;

  a {
    color: ${colors.white};
    text-decoration: none;
  }

  @media ${devices.tablet} {
    padding: 4.2rem 0 0 4rem;
  }

  @media ${devices.desktop} {
    padding: 4.5rem 0 0 16.5rem;
  }
`;

const Toggle = styled.div`
  width: 11.2rem;
  height: 2.4rem;
  padding: 3.6rem 0 0 5.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media ${devices.tablet} {
    padding: 4.6rem 4rem 0 41.7rem;
  }

  @media ${devices.desktop} {
    padding: 4.6rem 16.5rem 0 83.9rem;
  }
`;

const Label = styled.label`
  position: absolute;
  left: 9.1rem;
  width: 4.8rem;
  height: 2.4rem;
  background-color: ${colors.white};
  border-radius: 1.2rem;

  &::after {
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

  @media ${devices.tablet} {
    left: 45.4rem;
  }

  @media ${devices.desktop} {
    left: 87.5rem;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  cursor: pointer;

  &:checked + ${Label}::after {
    left: ${(props) => (props.mode === "light" ? ".5rem" : "2.9rem")};
  }

  @media ${devices.desktop} {
    &:hover + ${Label}::after {
      background-color: ${colors.lightViolet};
    }
  }
`;

export default Header;
