import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";

export const Container = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const CallContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  justify-content: center;
  align-items: center;
  margin-left: -5px;
  margin-bottom: -5px;
`;

export const NumbersList = styledComponents.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-left: -5px;
  margin-bottom: -5px;
`;

export const NumberLi = styledComponents.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: calc(100% / 3 - 5px);
  margin-left: 5px;
  margin-bottom: 5px;
`;

export const NumberButton = styledComponents.button`
  display: inline-block;
  background-color: #1E90FF;
  border: 2px solid #00BFFF;
  color: white;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #00BFFF;
  }
`;

export const CallNumberTextField = styled(TextField)({
  width: "100%",
  backgroundColor: "#FFFAFA",
  marginBottom: "20px",
  "& label.Mui-focused": {
    color: "#1976d2",
  },
  "& .MuiOutlinedInput-root": {
    "&:hover fieldset": {
      borderColor: "#1976d2",
    },
  },
});

export const CallButton = styled(IconButton)({
  backgroundColor: "#32CD32",
  color: "#FFFAFA",
  marginTop: "30px",
  "&:hover": {
    backgroundColor: "#00FF00",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#00FF00",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
