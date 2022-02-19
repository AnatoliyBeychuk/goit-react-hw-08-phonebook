import { createSelector } from "@reduxjs/toolkit";
import ContactItem from "../ContactItem/ContactItem";
import {
  getContacts,
  getFilter,
} from "../../redux/Contacts/contacts-selectors";
import { useSelector } from "react-redux";
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from "../../redux/Contacts/contacts-slice";
import { getToken } from "../../redux/Auth/auth-selectors";
import { Container, ListContacts } from "./ContactList.styled";
import LinearProgress from "@mui/material/LinearProgress";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function ContactList() {
  const currToken = useSelector(getToken);
  const { data, error, isFetching } = useFetchContactsQuery(currToken);
  const [deleteContact] = useDeleteContactMutation();

  const getFilteredArray = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
      if (!contacts || contacts.length === 0) return [];
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  );
  const filteredArray = useSelector(getFilteredArray);

  const getErrorMessage = (error) => {
    switch (error.status) {
      case 404:
        return "There is no such owner's collection.";
      case 500:
        return "Server error.";

      default:
        return "Unknown error!";
    }
  };

  return (
    <Container>
      {isFetching && <LinearProgress />}
      {data?.length === 0 && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Contact list is empty. —{" "}
          <strong>To add a contact, click the "ADD CONTACT" button!</strong>
        </Alert>
      )}
      {
        <ListContacts>
          {filteredArray?.map((contact) => {
            return (
              <ContactItem
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
              />
            );
          })}
        </ListContacts>
      }
      {filteredArray?.length === 0 && data?.length !== 0 && !isFetching && (
        <Alert severity="info">
          <AlertTitle>Info</AlertTitle>
          Nothing found. — <strong>Try a different contact name!</strong>
        </Alert>
      )}
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong. —{" "}
          <strong>An error has occurred: {getErrorMessage(error)}</strong>
        </Alert>
      )}
    </Container>
  );
}

export default ContactList;
