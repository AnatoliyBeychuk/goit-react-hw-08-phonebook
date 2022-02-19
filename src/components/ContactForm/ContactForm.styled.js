import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const ContactFormContainer = styledComponent.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const Field = styledComponent.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const ContactFormTextField = styled(TextField)({
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

export const ContactFormButton = styled(Button)({
  marginTop: "25px",
  width: "100%",
});
