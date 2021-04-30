import styled from "styled-components";
import Button from "../Button";
import useWindowWidth from "../../hooks/useWindowWidth";
import CheckIcon from "../../images/desktop/icon-check.svg";
import { ReactComponent as LocationIcon } from "../../images/desktop/icon-location.svg";
import { ReactComponent as SearchIcon } from "../../images/desktop/icon-search.svg";
import { devices } from "../../styles/devices";
import { colors } from "../../styles/theme";

function SearchBar({ fields, handleChange, handleSubmit }) {
  const windowWidth = useWindowWidth();

  return (
    <SearchBarWrapper>
      <SearchBarColumn>
        <DescriptionField>
          <SearchIcon width={24} height={24} fill={colors.violet} />
          <Input
            name="description"
            type="text"
            value={fields.description}
            onChange={handleChange}
            placeholder={
              windowWidth < 1440
                ? "Filter by title..."
                : "Filter by title, companies, expertise..."
            }
          />
          <Label htmlFor="description">Enter description</Label>
        </DescriptionField>
      </SearchBarColumn>
      <SearchBarColumn>
        <LocationField>
          <LocationIcon fill={colors.violet} />
          <Input
            name="location"
            type="text"
            value={fields.location}
            onChange={handleChange}
            placeholder="Filter by location..."
          />
          <Label htmlFor="location">Enter location</Label>
        </LocationField>
      </SearchBarColumn>
      <SearchBarColumn>
        <FullTimeField>
          <Input
            name="full_time"
            type="checkbox"
            checked={fields.full_time === "on" ? true : false}
            onChange={handleChange}
          />
          <Label htmlFor="full_time">
            {windowWidth < 1440 ? "Full Time" : "Full Time Only"}
          </Label>
        </FullTimeField>
        <Button
          width={windowWidth < 1440 ? 8 : 12.3}
          height={4.8}
          bg={colors.violet}
          hover={colors.lightViolet}
          text={colors.white}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </SearchBarColumn>
    </SearchBarWrapper>
  );
}

const Input = styled.input`
  height: 2.4rem;
  background-color: ${(props) => props.theme.background.component};
  color: ${(props) => props.theme.text.input};
  font-size: 1.6rem;
  caret-color: ${colors.violet};
  cursor: pointer;

  &::placeholder {
    opacity: 50%;
  }
`;

const Label = styled.label`
  display: none;
`;

const SearchBarWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 8rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background.component};
`;

const SearchBarColumn = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    border-right: 0.1rem solid ${colors.border};
  }
`;

const DescriptionField = styled.div`
  display: flex;
  margin: 0 2.4rem;

  @media ${devices.desktop} {
    margin: 0 3.2rem;
  }

  ${Input} {
    width: 13.3rem;
    margin-left: 1.6rem;

    @media ${devices.desktop} {
      width: 35.8rem;
    }
  }
`;

const LocationField = styled.div`
  display: flex;
  margin: 0 2.4rem;

  @media ${devices.desktop} {
    margin: 0 2.3rem;
  }

  ${Input} {
    width: 13.1rem;
    margin-left: 1.6rem;

    @media ${devices.desktop} {
      width: 22rem;
    }
  }
`;

const FullTimeField = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;

  @media ${devices.desktop} {
    margin-left: 3.2rem;
  }

  ${Input} {
    width: 2.4rem;
    appearance: none;
    background-color: ${(props) => props.theme.background.checkBox};
    opacity: 10.35%;
    border-radius: 0.3rem;

    @media ${devices.desktop} {
      &:hover {
        background-color: ${colors.violet};
        opacity: 25%;
        transition: 0.2s;
      }
    }

    &:checked {
      background-color: ${colors.violet};
      background-image: url(${CheckIcon});
      background-repeat: no-repeat;
      background-position: center;
      opacity: 100%;
    }
  }

  ${Label} {
    display: inline;
    width: 9.8rem;
    margin-left: 1.6rem;
    color: ${(props) => props.theme.text.checkBox};
    font-size: 1.6rem;
    font-weight: 700;

    @media ${devices.desktop} {
      width: 13.6rem;
    }
  }
`;

export default SearchBar;
