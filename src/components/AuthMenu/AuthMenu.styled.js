import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const SignInButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#3CB371",
  "&:hover": {
    backgroundColor: "#00FA9A",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#00FA9A",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const RegistrationButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#800080",
  "&:hover": {
    backgroundColor: "#9932CC",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#9932CC",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
