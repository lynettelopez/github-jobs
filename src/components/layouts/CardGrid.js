import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "../Card";
import { devices } from "../../styles/devices";

function CardGrid({ results }) {
  return (
    <CardGridWrapper>
      {results.map((result) => {
        return (
          <Link
            key={result.id}
            to={"/positions/" + result.id}
            style={{ textDecoration: "none" }}
          >
            <Card {...result} />
          </Link>
        );
      })}
    </CardGridWrapper>
  );
}

const CardGridWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(327px, 1fr));
  gap: 2.4rem 0;

  @media ${devices.tablet} {
    gap: 4rem 1.1rem;
  }

  @media ${devices.desktop} {
    gap: 4rem 3rem;
  }
`;

export default CardGrid;
