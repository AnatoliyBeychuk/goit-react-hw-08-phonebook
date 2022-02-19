import styledComponent from "styled-components";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const UserName = styledComponent.span`
color: #DAA520;
font-size: 20px;
font-weight: 900;
margin-left: 10px;
margin-right: 10px;
`;

export const LogOutButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#DC143C",
  "&:hover": {
    backgroundColor: "#FF0000",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#FF0000",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
