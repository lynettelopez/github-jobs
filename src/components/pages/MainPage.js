import styled from "styled-components";
import { colors } from "../../styles/theme";
import Button from "../Button";
import Positions from "../layouts/Positions";
import SearchBar from "../layouts/SearchBar";
import SearchBarMobile from "../layouts/SearchBarMobile";
import useWindowWidth from "../../hooks/useWindowWidth";

function MainPage() {
  const windowWidth = useWindowWidth();

  return (
    <MainPageWrapper>
      {windowWidth < 768 ? <SearchBarMobile /> : <SearchBar />}
      <Positions />
      <Button
        width={14.1}
        height={4.8}
        bg={colors.violet}
        hover={colors.lightViolet}
        text={colors.white}
      >
        Load More
      </Button>
    </MainPageWrapper>
  );
}

const MainPageWrapper = styled.main`
  width: 32.7rem;
  position: absolute;
  top: 9.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: 3.2rem;
  }
`;

export default MainPage;
