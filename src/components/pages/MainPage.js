import styled from "styled-components";
import Button from "../Button";
import CardGrid from "../layouts/CardGrid";
import SearchBar from "../layouts/SearchBar";
import SearchBarMobile from "../layouts/SearchBarMobile";
import useSearch from "../../hooks/useSearch";
import useWindowWidth from "../../hooks/useWindowWidth";
import { devices } from "../../styles/devices";
import { colors } from "../../styles/theme";

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
      <CardGrid results={results} />
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
  margin: -4rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    width: 68.9rem;
  }

  @media ${devices.desktop} {
    width: 111rem;
  }

  > * {
    margin-bottom: 3.2rem;

    @media ${devices.tablet} {
      margin-bottom: 4.5rem;

      &:last-child {
        margin-top: 1.1rem;
      }
    }

    @media ${devices.desktop} {
      margin-bottom: 8rem;

      &:last-child {
        margin-top: -2.4rem;
      }
    }
  }
`;

export default MainPage;
