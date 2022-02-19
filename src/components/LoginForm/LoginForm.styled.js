import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LockIcon from "@mui/icons-material/Lock";

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

export const ComeInForm = styledComponent.form`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  max-width: 400px;
  width: 100%;
  height: auto;
`;

export const LoginTextField = styled(TextField)({
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

export const LoginButton = styled(Button)({
  marginTop: "25px",
  width: "100%",
});

export const LoginIconButton = styled(IconButton)({
  marginTop: "25px",
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

export const LoginLockIcon = styled(LockIcon)({
  fill: "white",
});
