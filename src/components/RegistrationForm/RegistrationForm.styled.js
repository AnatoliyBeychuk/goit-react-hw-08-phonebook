import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import HowToRegIcon from "@mui/icons-material/HowToReg";

export const Container = styledComponent.div`
  margin-top: 50px;
`;

export const FormContainer = styledComponent.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const RegisterForm = styledComponent.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: auto;
`;

export const RegistrTextField = styled(TextField)({
  marginTop: "25px",
  width: "100%",
  "& label.Mui-focused": {
    color: "#1976d2",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#1976d2",
    },
  },
});

export const RegistrButton = styled(Button)({
  marginTop: "25px",
  width: "100%",
});

export const RegistrIconButton = styled(IconButton)({
  marginTop: "25px",
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

export const RegistrLockIcon = styled(HowToRegIcon)({
  fill: "white",
});
