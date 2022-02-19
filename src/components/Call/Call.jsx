import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Container,
  NumbersList,
  NumberButton,
  NumberLi,
  CallNumberTextField,
  CallContainer,
  CallButton,
} from "./Call.styled.js";
import CallIcon from "@mui/icons-material/Call";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { getIsLoggedIn } from "../../redux/Auth/auth-selectors.js";

function Call() {
  const location = useLocation();
  const [callNumber, setCallNumber] = useState("");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const isLoggedIn = useSelector(getIsLoggedIn);

  const todo = location.state?.todo === "call";

  useEffect(() => {
    if (todo) {
      const { number } = location.state?.user;
      setCallNumber(number);
    }
  }, [location.state?.user, todo]);

  const handleButtonClick = (evt) => {
    switch (evt.target.nodeName) {
      case "BUTTON":
        setCallNumber(callNumber + evt.target.innerText);
        break;
      case "INPUT":
        setCallNumber(evt.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <Container>
      {!isLoggedIn && (
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          Functionality is limited —{" "}
          <strong>
            In order to see the list of contacts, you need to register or log in
            using your email and password!
          </strong>
        </Alert>
      )}
      <h1>Call</h1>
      <CallContainer>
        <CallNumberTextField
          type="tel"
          name="number"
          required
          autoComplete="off"
          id="call-required-number"
          value={callNumber}
          onChange={handleButtonClick}
        />
        <NumbersList>
          {numbers.map((number) => {
            return (
              <NumberLi key={number}>
                <NumberButton type="button" onClick={handleButtonClick}>
                  {number}
                </NumberButton>
              </NumberLi>
            );
          })}
        </NumbersList>
        <a
          href={`tel:${callNumber}`}
          style={{ textDecoration: "none", margin: "5px" }}
        >
          <CallButton aria-label="call" size="large">
            <CallIcon />
          </CallButton>
        </a>
      </CallContainer>
    </Container>
  );
}

export default Call;
