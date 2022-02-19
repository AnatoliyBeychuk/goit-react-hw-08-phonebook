import { useDispatch, useSelector } from "react-redux";
import Avatar from "@mui/material/Avatar";
import { LogOutButton, UserName } from "./UserMenu.styled";
import { token } from "../../redux/Auth/auth-actions";
import { useLogoutMutation } from "../../redux/Auth/auth-slice";
import { getCurrentUser, getToken } from "../../redux/Auth/auth-selectors";

function UserMenu() {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const currToken = useSelector(getToken);
  const [logout] = useLogoutMutation();

  return (
    <>
      <Avatar
        alt={currentUser.name}
        src="https://mui.com/static/images/avatar/1.jpg"
      />
      <UserName>{currentUser.email}</UserName>
      <LogOutButton
        type="button"
        variant="contained"
        onClick={() => {
          logout(currToken);
          dispatch(token(""));
        }}
      >
        Log Out
      </LogOutButton>
    </>
  );
}

export default UserMenu;
