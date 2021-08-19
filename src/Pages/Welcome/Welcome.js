import React, { useEffect } from "react";
import styled from "styled-components";
import firebase from "../../Firebase/firebase";
import { signInWithGoogle } from "../../Firebase/firebase";
import "firebase/auth";
import google from "../../Assets/Images/google.svg";
import apple from "../../Assets/Images/apple.svg";
import Button from "../../Components/Button";
import { useHistory } from "react-router";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #060606;
`;

const Start = () => {
  const history = useHistory();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        history.push("/Home");
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user logout");
      }
    });
  }, []);

  return (
    <Center>
      <Button
        fx={signInWithGoogle}
        image={google}
        text="Continue With Google"
      />
      <Button image={apple} text="Continue With Apple" />
    </Center>
  );
};

export default Start;
