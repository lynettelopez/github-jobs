import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import { devices } from "../../styles/devices";
import { colors } from "../../styles/theme";

function Footer({ company, title, url }) {
  const windowWidth = useWindowWidth();

  return (
    <FooterWrapper>
      {windowWidth >= 768 ? (
        <Details>
          <h1>{title}</h1>
          <p>{company}</p>
        </Details>
      ) : null}
      <Button as="a" href={url}>
        Apply Now
      </Button>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  height: 9.6rem;
  background-color: ${(props) => props.theme.background.component};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.div`
  width: 49.2;
  margin-left: 3.9rem;

  @media ${devices.desktop} {
    width: 54.9rem;
    margin-left: 35.5rem;
  }

  h1 {
    margin-bottom: 1.2rem;
  }
`;

const Button = styled.button`
  width: 32.7rem;
  height: 4.8rem;
  margin: auto;
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
    height: 4.8rem;
    margin-right: 3.9rem;
  }

  @media ${devices.desktop} {
    margin-right: 35.5rem;

    &:hover {
      background-color: ${colors.lightViolet};
      transition: 0.2s;
    }
  }
`;

export default Footer;
