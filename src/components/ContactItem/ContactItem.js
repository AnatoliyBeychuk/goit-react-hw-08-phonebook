import * as React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import {
  ListItemTextContainer,
  ListItemControls,
  CallButton,
  EditButton,
  DeleteButton,
} from "./ContactItem.styled";
import { getToken } from "../../redux/Auth/auth-selectors";
import { stringAvatar } from "../../utils/Utils";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ContactItem({ contact: { id, name, number }, deleteContact }) {
  const location = useLocation();
  const currToken = useSelector(getToken);
  return (
    <>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar
            alt={name}
            sx={{ width: 56, height: 56 }}
            {...stringAvatar(name)}
          />
        </ListItemAvatar>
        <ListItemTextContainer>
          <ListItemText
            primary={
              <Typography
                sx={{ display: "inline", fontSize: 26 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {name}
              </Typography>
            }
          />
          <ListItemText
            primary={
              <Typography
                sx={{ display: "inline", fontSize: 26 }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {number}
              </Typography>
            }
          />
          <ListItemControls>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  margin: "5px",
                };
              }}
              to="/"
              state={{
                from: location,
                todo: "call",
                user: { contactId: id, name, number },
              }}
            >
              <CallButton variant="contained" startIcon={<CallIcon />}>
                Call
              </CallButton>
            </NavLink>
            <NavLink
              style={({ isActive }) => {
                return {
                  textDecoration: "none",
                  margin: "5px",
                };
              }}
              to="/contacts/edit-contact"
              state={{
                from: location,
                todo: "edit",
                user: { contactId: id, name, number },
              }}
            >
              <EditButton variant="contained" startIcon={<EditIcon />}>
                Edit
              </EditButton>
            </NavLink>
            <DeleteButton
              variant="contained"
              startIcon={<DeleteIcon />}
              type="button"
              onClick={() => deleteContact({ contactId: id, token: currToken })}
            >
              Delete
            </DeleteButton>
          </ListItemControls>
        </ListItemTextContainer>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
