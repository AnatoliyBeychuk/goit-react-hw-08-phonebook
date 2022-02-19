import { NavLink } from "react-router-dom";
import { SignInButton, RegistrationButton } from "./AuthMenu.styled";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";

function AuthMenu() {
  return (
    <>
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            margin: "5px",
          };
        }}
        to="/register"
      >
        <RegistrationButton
          variant="contained"
          startIcon={<AppRegistrationIcon />}
        >
          Registration
        </RegistrationButton>
      </NavLink>
      <NavLink
        style={({ isActive }) => {
          return {
            textDecoration: "none",
            margin: "5px",
          };
        }}
        to="/login"
      >
        <SignInButton variant="contained" startIcon={<AssignmentIndIcon />}>
          Sign in
        </SignInButton>
      </NavLink>
    </>
  );
}

export default AuthMenu;
