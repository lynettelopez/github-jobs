import styled from "styled-components";
import dateConverter from "../../helpers/dateConverter";
// import useWindowWidth from "../../hooks/useWindowWidth";
import FooterImageMobile from "../../images/mobile/bg-pattern-detail-footer.svg";
import { colors } from "../../styles/theme";

function Body({ createdAt, type, title, location, url, description, apply }) {
  // const windowWidth = useWindowWidth();
  const timestamp = dateConverter(createdAt);

  return (
    <BodyWrapper>
      <DescriptionSection>
        <Header>
          <PositionInformation>
            <Details>
              <h3>{timestamp}</h3>
              <span>&#9679;</span>
              <h3>{type}</h3>
            </Details>
            <Title>{title}</Title>
            <Location>{location}</Location>
          </PositionInformation>
          <Button as="a" href={url}>
            Apply Now
          </Button>
        </Header>
        <Description dangerouslySetInnerHTML={{ __html: description }} />
      </DescriptionSection>
      <ApplySection>
        <h1>How to Apply</h1>
        <Apply dangerouslySetInnerHTML={{ __html: apply }} />
      </ApplySection>
    </BodyWrapper>
  );
}

const BodyWrapper = styled.section`
  width: 32.7rem;
  margin: 0 auto 4rem;
`;

const DescriptionSection = styled.div`
  background: ${(props) => props.theme.background.component};
  margin-bottom: 3.2rem;
  padding: 4rem 0 3.2rem;
  border-radius: 0.5rem;
`;

const Header = styled.div`
  width: 27.9rem;
  margin: 0 auto 3.2rem;
`;

const PositionInformation = styled.div`
  margin-bottom: 3.2rem;
`;

const Details = styled.div`
  display: flex;
  margin-bottom: 1.1rem;

  h3 {
    font-size: 1.6rem;
    font-weight: 400;
  }

  > * {
    margin-right: 1.2rem;
    color: ${colors.darkGrey};
  }
`;

const Title = styled.div`
  margin-bottom: 1.2rem;
  color: ${(props) => props.theme.text.headings};
  font-size: 2rem;
  font-weight: 700;
`;

const Location = styled.div`
  color: ${colors.violet};
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 700;
`;

const Button = styled.button`
  height: 4.8rem;
  background-color: ${colors.violet};
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  width: 27.8rem;
  margin: 0 auto;
  color: ${colors.darkGrey};
  font-size: 1.6rem;
  line-height: 2.6rem;

  p {
    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  a {
    color: ${colors.violet};
    font-weight: 700;
  }

  h1 {
    margin-bottom: 2.8rem;
    color: ${(props) => props.theme.text.headings};
    font-size: 2rem;
    font-weight: 700;
  }

  ul,
  ol {
    margin-left: 1.8rem;
    margin-bottom: 3.2rem;

    li {
      padding-left: 3.2rem;
      margin-bottom: 0.8rem;

      &::marker {
        color: ${colors.violet};
      }
    }
  }

  ol {
    margin-left: 1rem;

    li {
      counter-increment: list;

      &::marker {
        content: counter(list);
        font-weight: 700;
      }
    }
  }
`;

const ApplySection = styled.div`
  width: calc(100% - 6.4rem);
  height: calc(100% - 6.4rem);
  padding: 3.2rem;
  margin-bottom: 4rem;
  background-image: url(${FooterImageMobile});
  background-size: cover;
  border-radius: 0.5rem;
  color: ${colors.white};
  word-break: break-all;
  word-break: break-word;

  h1 {
    margin-bottom: 2.8rem;
    font-size: 2rem;
    font-weight: 700;
  }
`;

const Apply = styled.div`
  width: 26.3rem;
  font-size: 1.6rem;
  line-height: 2.6rem;

  p {
    :not(:last-child) {
      margin-bottom: 2.8rem;
    }
  }

  a {
    color: ${colors.white};
    font-weight: 700;
  }
`;

export default Body;
