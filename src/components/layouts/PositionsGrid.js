import styled from "styled-components";
import useApi from "../../hooks/useApi";

function PositionsGrid() {
  const { results } = useApi();

  return (
    <PositionsGridWrapper>
      {/* {results.map((result) => (
        <PositionCard key={result.id}>{result.title}</PositionCard>
      ))} */}
      {console.log(results)}
    </PositionsGridWrapper>
  );
}

const PositionsGridWrapper = styled.section`
  display: flex;
  flex-direction: column;

  > * {
    margin-bottom: 2.4rem;
  }
`;

const PositionCard = styled.article`
  width: 32.7rem;
  height: 25.3rem;
`;

export default PositionsGrid;
