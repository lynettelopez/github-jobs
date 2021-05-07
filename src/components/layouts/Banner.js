import extractDomain from "extract-domain";
import styled from "styled-components";
import { devices } from "../../styles/devices";

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

  @media ${devices.tablet} {
    width: 68.9rem;
    margin-bottom: 3.2rem;
    flex-direction: row;
  }

  @media ${devices.desktop} {
    width: 73rem;
  }
`;

const Logo = styled.img`
  z-index: 1;
  width: 5rem;
  height: 5rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.background.component};

  @media ${devices.tablet} {
    width: 14rem;
    height: 14rem;
    border-radius: 0 0 0 0.6rem;
  }
`;

const Body = styled.div`
  width: 100%;
  margin-top: -2.5rem;
  background-color: ${(props) => props.theme.background.component};
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${devices.tablet} {
    height: 14rem;
    margin-top: 0;
    margin-left: -14rem;
    border-radius: 0 0.6rem 0.6rem 0.6rem;
    flex-direction: row;
    position: relative;
  }
`;

const Details = styled.div`
  width: 28.2rem;
  margin-top: 4.9rem;
  padding: 0 3.2rem;
  text-align: center;

  @media ${devices.tablet} {
    margin: 0 0 0 18rem;
    padding: 0;
    text-align: left;
  }

  h1 {
    margin-bottom: 1.3rem;

    @media ${devices.tablet} {
      font-size: 2.4rem;
      line-height: 2.4rem;
    }
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

  @media ${devices.tablet} {
    position: absolute;
    right: 4rem;
    margin: 0;
  }

  @media ${devices.desktop} {
    right: 4.3rem;

    &:hover {
      background-color: ${(props) => props.theme.background.button.hover};
      transition: 0.2s;
    }
  }
`;

export default Banner;
