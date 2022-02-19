import { useSelector } from "react-redux";
import { getFilter } from "../../redux/Contacts/contacts-selectors";
import { Container, FilterTextField } from "./Filter.styled";
import { changeFilter } from "../../redux/Contacts/contacts-actions";
import { useDispatch } from "react-redux";

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <Container>
      <FilterTextField
        type="search"
        name="filter"
        autoComplete="off"
        id="sign-in-required-filter"
        label="Find contacts by name"
        onChange={(event) => {
          const { value } = event.currentTarget;
          dispatch(changeFilter(value));
        }}
        value={filter}
      />
    </Container>
  );
}

export default Filter;
