import styled from "styled-components";
import { colors } from "../../styles/theme";
import Button from "../Button";
import PositionsGrid from "../layouts/PositionsGrid";
import SearchBar from "../layouts/SearchBar";
import SearchBarMobile from "../layouts/SearchBarMobile";
import useSearch from "../../hooks/useSearch";
import useWindowWidth from "../../hooks/useWindowWidth";

function MainPage() {
  const {
    fields,
    handleChange,
    handleSubmit,
    results,
    loadMoreResults,
    canLoadMoreResults,
  } = useSearch();
  const windowWidth = useWindowWidth();

  return (
    <MainPageWrapper>
      {windowWidth < 768 ? (
        <SearchBarMobile
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      ) : (
        <SearchBar
          fields={fields}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
      <PositionsGrid results={results} />
      {canLoadMoreResults && (
        <Button
          width={14.1}
          height={4.8}
          bg={colors.violet}
          hover={colors.lightViolet}
          text={colors.white}
          onClick={loadMoreResults}
        >
          Load More
        </Button>
      )}
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
