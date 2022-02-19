import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container } from "../../pages/UpdateContactPage/UpdateContactPage.styled";
import {
  ContactFormContainer,
  Field,
  ContactFormTextField,
  ContactFormButton,
} from "./ContactForm.styled";
import {
  useCreateContactMutation,
  useUpdateContactMutation,
} from "../../redux/Contacts/contacts-slice";
import { getContacts } from "../../redux/Contacts/contacts-selectors";
import { getToken } from "../../redux/Auth/auth-selectors";

function ContactForm() {
  const location = useLocation();
  let navigate = useNavigate();
  const currToken = useSelector(getToken);
  const [createContact] = useCreateContactMutation();
  const [updateContact] = useUpdateContactMutation();
  const [path, setPath] = useState("/");
  const [contactId, setContactId] = useState(0);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contacts = useSelector(getContacts);

  const todo = location.state?.todo === "edit";

  useEffect(() => {
    const { pathname, search } = location.state.from;
    setPath(pathname + search);
    if (todo) {
      const { contactId, name, number } = location.state.user;
      setContactId(contactId);
      setName(name);
      setNumber(number);
    }
  }, [location.state.from, location.state.todo, location.state.user, todo]);

  const handleChange = (value, name) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const findDuplicateContact = (array, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return array.some(
      (contact) => contact.name.toLowerCase() === normalizedFilter
    );
  };

  const onAddOrUpdateContact = () => {
    if (todo) {
      updateContact({ contactId, name, number, token: currToken });
    } else {
      const filteredArray = findDuplicateContact(contacts, name);
      if (filteredArray) {
        alert(`${name} is already in contacts.`);
        return;
      }
      createContact({ name, number, token: currToken });
      setName("");
      setNumber("");
    }
    navigate(path);
  };

  const isInputNameEmpty = !name;
  const isInputNumberEmpty = !number;

  return (
    <Container>
      <ContactFormContainer>
        <Field>
          <ContactFormTextField
            type="text"
            name="name"
            required
            id="contact-form-required-name"
            label="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={(event) => {
              const { value, name } = event.currentTarget;
              handleChange(value, name);
            }}
            value={name}
          />
        </Field>

        <Field>
          <ContactFormTextField
            type="tel"
            name="number"
            required
            id="contact-form-required-number"
            label="Number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={(event) => {
              const { value, name } = event.currentTarget;
              handleChange(value, name);
            }}
            value={number}
          />
        </Field>

        <ContactFormButton
          variant="contained"
          type="button"
          name="add"
          onClick={() => onAddOrUpdateContact()}
          disabled={isInputNameEmpty || isInputNumberEmpty}
        >
          {todo ? "Edit contact" : "Add contact"}
        </ContactFormButton>
      </ContactFormContainer>
    </Container>
  );
}

export default ContactForm;
