import { Outlet } from "react-router-dom";
import { Header, MenuContainer } from "./AppBar.styled";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthMenu from "../AuthMenu/AuthMenu";
import { useSelector } from "react-redux";
import { getIsLoggedIn } from "../../redux/Auth/auth-selectors";

function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <>
      <Header>
        <Navigation />
        <MenuContainer>
          {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </MenuContainer>
      </Header>
      <Outlet />
    </>
  );
}

export default AppBar;
