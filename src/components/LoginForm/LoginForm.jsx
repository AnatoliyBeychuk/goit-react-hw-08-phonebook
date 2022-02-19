import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/Auth/auth-slice";
import { Container } from "../../pages/LoginPage/LoginPage.styled";
import {
  ComeInForm,
  FormContainer,
  LoginTextField,
  LoginButton,
  LoginIconButton,
  LoginLockIcon,
} from "./LoginForm.styled";
import { token } from "../../redux/Auth/auth-actions";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function LoginForm() {
  const dispatch = useDispatch();
  const [login, { isError, error }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (evt) => {
    const { value, name } = evt.currentTarget;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const { data } = await login({ email, password });
    dispatch(token(data?.token ?? ""));
    setEmail("");
    setPassword("");
  };

  const getErrorMessage = (error) => {
    switch (error.status) {
      case 400:
        return "Failed to login! There is no user with this username and password!";
      case 500:
        return "Server error.";

      default:
        return "Unknown error!";
    }
  };

  return (
    <Container>
      {isError && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Something went wrong. —{" "}
          <strong>
            An error has occurred:{" "}
            {error?.data?.message ?? getErrorMessage(error)}
          </strong>
        </Alert>
      )}
      <FormContainer>
        <ComeInForm onSubmit={handleFormSubmit}>
          <LoginIconButton aria-label="Sign in">
            <LoginLockIcon />
          </LoginIconButton>
          <h2>Sign in</h2>
          <LoginTextField
            type="email"
            name="email"
            required
            id="sign-in-required-email"
            label="Email"
            autoComplete="off"
            value={email}
            onChange={handleChangeInput}
          />
          <LoginTextField
            type="password"
            name="password"
            required
            autoComplete="off"
            id="sign-in-required-password"
            label="Password"
            value={password}
            onChange={handleChangeInput}
          />
          <LoginButton type="submit" variant="contained">
            Sign in
          </LoginButton>
          <Link
            to="#"
            style={{
              marginTop: "15px",
              color: "#1976d2",
            }}
          >
            Forgot password?
          </Link>
        </ComeInForm>
      </FormContainer>
    </Container>
  );
}

export default LoginForm;
