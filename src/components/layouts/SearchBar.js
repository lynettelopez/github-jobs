// import { useContext } from "react";
import styled from "styled-components";
// import { ThemeContext } from "styled-components";
import Button from "../Button";
// import { ReactComponent as SearchIcon } from "../../images/desktop/icon-search.svg";
import { colors } from "../../styles/theme";

function SearchBar({ fields, handleChange, handleSubmit }) {
  //   const themeContext = useContext(ThemeContext);

  return (
    <SearchBarWrapper>
      <DescriptionField>
        <Input
          name="description"
          type="text"
          value={fields.description}
          onChange={handleChange}
          placeholder="Filter by title..."
        />
        <Label htmlFor="description">Enter description</Label>
      </DescriptionField>
      <LocationField>
        <Input
          name="location"
          type="text"
          value={fields.location}
          onChange={handleChange}
          placeholder="Filter by location..."
        />
        <Label htmlFor="location">Enter location</Label>
      </LocationField>
      <FullTimeField>
        <Input
          name="full_time"
          type="checkbox"
          checked={fields.full_time === "on" ? true : false}
          onChange={handleChange}
        />
        <Label htmlFor="full_time">Full Time Only</Label>
      </FullTimeField>
      <Button
        width={27.9}
        height={4.8}
        bg={colors.violet}
        hover={colors.lightViolet}
        text={colors.white}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </SearchBarWrapper>
  );
}

const SearchBarWrapper = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background.component};
`;

const DescriptionField = styled.div`
  margin-left: 2.4rem;
`;

const LocationField = styled.div``;

const FullTimeField = styled.div``;

const Input = styled.input`
  background-color: ${(props) => props.theme.background.component};
  color: ${(props) => props.theme.text.input};
  font-size: 1.6rem;
  line-height: 1.6rem;

  ::placeholder {
    opacity: 50%;
  }
`;

const Label = styled.label`
  display: none;
`;

export default SearchBar;
