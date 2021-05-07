import extractDomain from "extract-domain";
import styled from "styled-components";
import { colors } from "../../styles/theme";

function Banner({ company, logo, url }) {
  return (
    <BannerWrapper>
      <Logo
        src={
          logo
            ? logo
            : "https://maceilautobody.com/wp-content/uploads/2018/06/logo-placeholder.png"
        }
        alt={company + "'s logo"}
      />
      <Body>
        <Details>
          <h1>{company}</h1>
          <p>{url && extractDomain(url)}</p>
        </Details>
        <Button as="a" href={url}>
          Company Site
        </Button>
      </Body>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.section`
  width: 32.7rem;
  margin: -4rem auto 2.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  z-index: 1;
  width: 5rem;
  height: 5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.component};
`;

const Body = styled.div`
  width: 100%;
  margin-top: -2.5rem;
  background-color: ${(props) => props.theme.background.component};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Details = styled.div`
  margin-top: 4.9rem;
  text-align: center;

  h1 {
    margin-bottom: 1.3rem;
    color: ${(props) => props.theme.text.headings};
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: ${colors.darkGrey};
    font-size: 1.6rem;
  }
`;

const Button = styled.button`
  width: 14.7rem;
  height: 4.8rem;
  margin: 2.7rem 0 3.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.background.button.normal};
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.text.button};
  font-size: 1.6rem;
  font-weight: 700;
`;

export default Banner;
