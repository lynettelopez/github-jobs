import styled from "styled-components";
import dateConverter from "../../helpers/dateConverter";
import FooterImageMobile from "../../images/mobile/bg-pattern-detail-footer.svg";
import FooterImageDesktop from "../../images/desktop/bg-pattern-detail-footer.svg";
import { devices } from "../../styles/devices";
import { colors } from "../../styles/theme";

function Body({ createdAt, type, title, location, url, description, apply }) {
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

  @media ${devices.tablet} {
    width: 68.9rem;
    margin-bottom: 4.8rem;
  }

  @media ${devices.desktop} {
    width: 73rem;
    margin-bottom: 7.2rem;
  }
`;

const DescriptionSection = styled.div`
  background: ${(props) => props.theme.background.component};
  margin-bottom: 3.2rem;
  padding: 4rem 0 3.2rem;
  border-radius: 0.5rem;

  @media ${devices.tablet} {
    padding: 4.8rem;
  }
`;

const Header = styled.div`
  width: 27.9rem;
  margin: 0 auto 3.2rem;

  @media ${devices.tablet} {
    width: 59.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 4rem;
  }

  @media ${devices.desktop} {
    width: 63.9rem;
  }
`;

const PositionInformation = styled.div`
  margin-bottom: 3.2rem;

  @media ${devices.tablet} {
    width: 42rem;
    margin: 0;
  }

  @media ${devices.desktop} {
    width: 46.8rem;
  }
`;

const Details = styled.div`
  display: flex;
  margin-bottom: 1.1rem;

  > * {
    margin-right: 1.2rem;
    color: ${colors.darkGrey};
  }
`;

const Title = styled.h1`
  margin-bottom: 1.2rem;

  @media ${devices.tablet} {
    margin-bottom: 1.4rem;
    font-size: 2.8rem;
    line-height: 2.8rem;
  }
`;

const Location = styled.h2`
  line-height: 1.8rem;

  @media ${devices.tablet} {
    line-height: 1.4rem;
  }
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

  @media ${devices.tablet} {
    width: 14.1rem;
  }

  @media ${devices.desktop} {
    &:hover {
      background-color: ${colors.lightViolet};
      transition: 0.2s;
    }
  }
`;

const Description = styled.div`
  width: 27.8rem;
  margin: 0 auto;
  color: ${colors.darkGrey};
  font-size: 1.6rem;
  line-height: 2.6rem;

  @media ${devices.tablet} {
    width: 59.3rem;
  }

  @media ${devices.desktop} {
    width: 63.9rem;
  }

  p {
    line-height: 2.6rem;

    :not(:last-child) {
      margin-bottom: 3rem;
    }
  }

  a {
    color: ${colors.violet};
    font-weight: 700;

    &:hover {
      color: ${colors.lightViolet};
      transition: 0.2s;
    }
  }

  h1 {
    margin-bottom: 2.8rem;
  }

  ul,
  ol {
    margin-left: 1.8rem;

    &:not(:last-child) {
      margin-bottom: 3.2rem;
    }

    li {
      margin-bottom: 0.8rem;
      padding-left: 3.2rem;

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
  background-image: url(${FooterImageMobile});
  background-size: cover;
  border-radius: 0.5rem;
  word-break: break-all;
  word-break: break-word;

  @media ${devices.tablet} {
    width: calc(100% - 9.6rem);
    height: calc(100% - 8.2rem);
    padding: 4.1rem 4.8rem;
    background-image: url(${FooterImageDesktop});
  }

  h1 {
    margin-bottom: 2.8rem;
    color: ${colors.white};
  }
`;

const Apply = styled.div`
  width: 26.3rem;

  @media ${devices.tablet} {
    width: 59.3rem;
  }

  p {
    color: ${colors.white};
    line-height: 2.6rem;

    :not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }

  a {
    color: ${colors.white};
    font-weight: 700;

    &:hover {
      color: ${colors.white};
      opacity: 0.8;
      transition: 0.2s;
    }
  }
`;

export default Body;
