import styledComponend from "styled-components";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const Nav = styledComponend.nav`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const NavButton = styled(Button)({
  minWidth: "120px",
  width: "100%",
});
