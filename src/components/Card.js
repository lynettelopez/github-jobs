import styled from "styled-components";
import dateConverter from "../helpers/dateConverter";
import { colors } from "../styles/theme";

function Card({ company, company_logo, created_at, location, title, type }) {
  const timestamp = dateConverter(created_at);

  return (
    <>
      <Logo>
        <img src={company_logo} alt={company + "'s logo"} />
      </Logo>
      <Body>
        <PositionInformation>
          <Details>
            <h3>{timestamp}</h3>
            <span>&#9679;</span>
            <h3>{type}</h3>
          </Details>
          <Title>{title}</Title>
          <Company>{company}</Company>
          <Location>{location}</Location>
        </PositionInformation>
      </Body>
    </>
  );
}

const Logo = styled.div`
  position: relative;
  z-index: 1;
  width: 5rem;
  height: 5rem;
  margin-left: 3.2rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.background.component};

  img {
    max-width: 100%;
    max-height: 100%;
    border-radius: 1.5rem;
  }
`;

const Body = styled.div`
  position: relative;
  z-index: 0;
  margin-top: -2.5rem;
  background-color: ${(props) => props.theme.background.component};
  border-radius: 0.5rem;
`;

const PositionInformation = styled.div`
  padding: 4.9rem 3.2rem 3.2rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${colors.darkGrey};
  }
`;

const Details = styled.div`
  display: flex;
  padding-bottom: 1.6rem;

  > * {
    padding-right: 1.2rem;
    color: ${colors.darkGrey};
  }
`;

const Title = styled.h1`
  padding-bottom: 1.7rem;
  font-size: 2rem;
  color: ${(props) => props.theme.text.headings};

  &:hover {
    color: ${colors.darkGrey};
    transition: 0.1s;
  }
`;

const Company = styled.h3`
  padding-bottom: 4.4rem;
`;

const Location = styled.h2`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 700;
  color: ${colors.violet};
`;

export default Card;
