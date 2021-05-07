import styled from "styled-components";
import dateConverter from "../helpers/dateConverter";
import { colors } from "../styles/theme";

function Card({ company, company_logo, created_at, location, title, type }) {
  const timestamp = dateConverter(created_at);

  return (
    <>
      <Logo
        src={
          company_logo
            ? company_logo
            : "https://maceilautobody.com/wp-content/uploads/2018/06/logo-placeholder.png"
        }
        alt={company + "'s logo"}
      />
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

const Logo = styled.img`
  position: relative;
  z-index: 1;
  width: 5rem;
  height: 5rem;
  margin-left: 3.2rem;
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.component};
`;

const Body = styled.div`
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
  margin-bottom: 1.6rem;

  > * {
    margin-right: 1.2rem;
    color: ${colors.darkGrey};
  }
`;

const Title = styled.h1`
  margin-bottom: 1.7rem;
  font-size: 2rem;
  color: ${(props) => props.theme.text.headings};

  &:hover {
    color: ${colors.darkGrey};
    transition: 0.1s;
  }
`;

const Company = styled.h3`
  margin-bottom: 4.4rem;
`;

const Location = styled.h2`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 700;
  color: ${colors.violet};
`;

export default Card;
