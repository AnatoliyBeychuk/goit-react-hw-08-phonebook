import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const ListItemTextContainer = styledComponents.div`
  display: flex;
  flex-basis: 100%;
  justify-content: center;
  align-items: center;
  & > * {
    width: 100%;
  }
`;

export const ListItemControls = styledComponents.div`
  display: flex;
  flex-basis: 100px;
  justify-content: flex-end;
  align-items: center;
`;

export const CallButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#32CD32",
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

export const EditButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#D2691E",
  "&:hover": {
    backgroundColor: "#DAA520",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#DAA520",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});

export const DeleteButton = styled(Button)({
  margin: "5px",
  backgroundColor: "#800000",
  "&:hover": {
    backgroundColor: "#A52A2A",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#A52A2A",
    borderColor: "#005cbf",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
  },
});
