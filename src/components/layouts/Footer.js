import styled from "styled-components";
import useWindowWidth from "../../hooks/useWindowWidth";
import { colors } from "../../styles/theme";

function Footer({ company, title, url }) {
  const windowWidth = useWindowWidth();

  return (
    <FooterWrapper>
      {windowWidth > 768 ? (
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
`;

const Details = styled.div``;

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
`;

export default Footer;
