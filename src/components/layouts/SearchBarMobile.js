import { useState, useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import Modal from "styled-react-modal";
import Button from "../Button";
import { ReactComponent as FilterIcon } from "../../images/mobile/icon-filter.svg";
import { ReactComponent as SearchIcon } from "../../images/desktop/icon-search.svg";
import { ReactComponent as LocationIcon } from "../../images/desktop/icon-location.svg";
import CheckIcon from "../../images/desktop/icon-check.svg";
import { colors } from "../../styles/theme";
import bounce from "../../styles/animations/bounce";

function SearchBarMobile({ fields, handleChange, handleSubmit }) {
  const themeContext = useContext(ThemeContext);
  const [isModalShowing, setIsModalShowing] = useState(false);

  return (
    <SearchBarMobileWrapper>
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
      <FilterButton onClick={() => setIsModalShowing(true)}>
        <FilterIcon fill={themeContext.background.filter} />
      </FilterButton>
      <SearchButton onClick={handleSubmit}>
        <SearchIcon fill={colors.white} />
      </SearchButton>

      <SearchModal
        isOpen={isModalShowing}
        onBackgroundClick={() => setIsModalShowing(false)}
        onEscapeKeydown={() => setIsModalShowing(false)}
      >
        <ModalTop>
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
        </ModalTop>
        <ModalBottom>
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
            onClick={(event) => {
              setIsModalShowing(false);
              handleSubmit(event);
            }}
          >
            Search
          </Button>
        </ModalBottom>
      </SearchModal>
    </SearchBarMobileWrapper>
  );
}

const SearchBarMobileWrapper = styled.section`
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

const FilterButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background.component};
`;

const SearchButton = styled.button`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 0.5rem;
  background-color: ${colors.violet};

  &:active {
    background-color: ${colors.lightViolet};
    transition: 0.1s;
  }
`;

const Input = styled.input`
  background-color: ${(props) => props.theme.background.component};
  color: ${(props) => props.theme.text.input};
  font-size: 1.6rem;

  &::placeholder {
    opacity: 50%;
  }
`;

const Label = styled.label`
  display: none;
`;

const SearchModal = Modal.styled`
  width: 32.7rem;
  height: 21.7rem;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.background.component};
  animation: ${bounce} 1s linear both;
`;

const ModalTop = styled.div`
  height: 7.2rem;
  border-bottom: 0.1rem solid ${colors.border};
`;

const LocationField = styled.div`
  height: 2.4rem;
  padding: 2.4rem 0 0 2.4rem;
  display: flex;
  align-items: center;

  ${Input} {
    width: 24.6rem;
    margin-left: 1.6rem;
    font-size: 1.6rem;
  }
`;

const ModalBottom = styled.div`
  height: 14.4rem;

  > * {
    margin-left: 2.4rem;
  }
`;

const FullTimeField = styled.div`
  padding: 2.4rem 0;
  display: flex;
  align-items: center;

  ${Input} {
    width: 2.4rem;
    height: 2.4rem;
    margin-right: 1.6rem;
    appearance: none;
    background-color: ${(props) => props.theme.background.checkBox};
    opacity: 10.35%;
    border-radius: 0.3rem;

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
    color: ${(props) => props.theme.text.checkBox};
    font-size: 1.6rem;
    font-weight: 700;
  }
`;

export default SearchBarMobile;
