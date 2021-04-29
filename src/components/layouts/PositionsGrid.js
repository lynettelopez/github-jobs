import styled from "styled-components";
import Card from "../Card";

function PositionsGrid({ results }) {
  return (
    <PositionsGridWrapper>
      {results.map((result) => {
        return (
          <PositionCard key={result.id}>
            <Card title={result.title} />
          </PositionCard>
        );
      })}
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

const PositionCard = styled.div`
  width: 32.7rem;
  height: 25.3rem;
`;

export default PositionsGrid;
