import styledComponents from "styled-components";
import { styled } from "@mui/material/styles";
import List from "@mui/material/List";

export const Container = styledComponents.div`
  margin-top: 60px;
`;

export const ListContacts = styled(List)({
  width: "100%",
  bgcolor: "background.paper",
});
