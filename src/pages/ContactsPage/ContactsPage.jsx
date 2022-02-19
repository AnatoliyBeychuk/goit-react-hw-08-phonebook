import { NavLink, useLocation } from "react-router-dom";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { Container } from "./ContactsPage.styled";
import Filter from "../../components/Filter/Filter";
import ContactList from "../../components/ContactList/ContactList";

function ContactsPage() {
  const location = useLocation();
  return (
    <Container>
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            margin: "5px",
          };
        }}
        to="/contacts/add-contact"
        state={{ from: location, todo: "add", user: {} }}
      >
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add contact"
          style={{
            position: "fixed",
            right: "10px",
            top: "68px",
            zIndex: "999",
          }}
        >
          <AddIcon sx={{ mr: 1 }} />
          Add contact
        </Fab>
      </NavLink>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default ContactsPage;
