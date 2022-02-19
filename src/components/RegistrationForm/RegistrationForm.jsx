import { useState } from "react";
import { useDispatch } from "react-redux";
import { Container } from "../../pages/RegistrationPage/RegistrationPage.styled";
import {
  FormContainer,
  RegisterForm,
  RegistrTextField,
  RegistrButton,
  RegistrIconButton,
  RegistrLockIcon,
} from "./RegistrationForm.styled";
import { useRegisterUserMutation } from "../../redux/Auth/auth-slice.js";
import { token } from "../../redux/Auth/auth-actions";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [registerUser, { isError, error }] = useRegisterUserMutation();

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();
    const { data } = await registerUser({ name, email, password });
    dispatch(token(data?.token ?? ""));
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case "name":
        setName(value);
        break;
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

  const getErrorMessage = (error) => {
    switch (error.status) {
      case 400:
        return "Error creating user. Perhaps a user with this email exists!";
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
        <RegisterForm onSubmit={handleFormSubmit}>
          <RegistrIconButton aria-label="Sign in">
            <RegistrLockIcon />
          </RegistrIconButton>
          <h2>Registration</h2>
          <RegistrTextField
            name="name"
            type="text"
            required
            id="registr-required-name"
            label="Name"
            autoComplete="off"
            placeholder="Введите ваше имя"
            onChange={handleInputChange}
            value={name}
          />
          <RegistrTextField
            name="email"
            type="email"
            required
            id="registr-required-email"
            label="Email"
            autoComplete="off"
            placeholder="Введите ваш имейл"
            onChange={handleInputChange}
            value={email}
          />
          <RegistrTextField
            name="password"
            type="password"
            required
            id="registr-required-password"
            label="Password"
            autoComplete="off"
            placeholder="Введите ваш пароль"
            onChange={handleInputChange}
            value={password}
          />
          <RegistrButton type="submit" variant="contained">
            Registration
          </RegistrButton>
        </RegisterForm>
      </FormContainer>
    </Container>
  );
}

export default RegistrationForm;
