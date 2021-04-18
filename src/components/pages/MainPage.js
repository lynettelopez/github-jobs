import styled from "styled-components";
import { convertPxToVw } from "../../utils";

import Button from "../Button";
import Positions from "../Positions";
import SearchBar from "../SearchBar";

const MainPageWrapper = styled.main`
  width: ${convertPxToVw(327)}vw;
  position: absolute;
  top: ${convertPxToVw(96)}vw;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin-bottom: ${convertPxToVw(32)}vw;
  }
`;

function MainPage() {
  return (
    <MainPageWrapper>
      <SearchBar />
      <Positions />
      <Button width={141} height={48}>
        Load More
      </Button>
    </MainPageWrapper>
  );
}

export default MainPage;
