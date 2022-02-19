import { useSelector } from "react-redux";
import { NavButton } from "./Navigation.styled";
import CallIcon from "@mui/icons-material/Call";
import ContactsIcon from "@mui/icons-material/Contacts";
import { NavLink } from "react-router-dom";
import { getIsLoggedIn } from "../../redux/Auth/auth-selectors";
import { Nav } from "./Navigation.styled";

function Navigation() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Nav>
        <NavLink
          style={({ isActive }) => {
            return {
              textDecoration: "none",
              margin: "5px",
            };
          }}
          to="/"
        >
          <NavButton variant="contained" startIcon={<CallIcon />}>
            Call
          </NavButton>
        </NavLink>
        {isLoggedIn && (
          <NavLink
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                margin: "5px",
              };
            }}
            to="/contacts"
          >
            <NavButton variant="contained" startIcon={<ContactsIcon />}>
              Contacts
            </NavButton>
          </NavLink>
        )}
      </Nav>
    </>
  );
}

export default Navigation;
