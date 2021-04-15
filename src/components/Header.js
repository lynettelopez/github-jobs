import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../styles/theme";
import { convertPxToVw } from "../utils";
import HeaderImageMobile from "../assets/mobile/bg-pattern-header.svg";
// import HeaderImageTablet from "../assets/tablet/bg-pattern-header.svg";
// import HeaderImageDesktop from "../assets/desktop/bg-pattern-header.svg";
import Toggle from "./Toggle";

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

const Header = ({ theme, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <Title>
        <Link to="/">github jobs</Link>
      </Title>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
    </HeaderWrapper>
  );
};

export default Header;
