import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

export const Container = styledComponents.div`
  position: fixed;
  left: 0;
  top: 50px;
  padding: 10px 10px 5px 10px;
  width: 100%;
  height: 60px;
  background-color: #F0FFF0;
  border: 1px solid #D3D3D3;
  z-index: 998;
`;

export const FilterTextField = styled(TextField)({
  width: "400px",
  backgroundColor: "#FFFAFA",
  "& label.Mui-focused": {
    color: "#1976d2",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#1976d2",
    },
  },
});
