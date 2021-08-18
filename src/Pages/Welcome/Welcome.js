import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import firebase from "../../Firebase/firebase";
import "firebase/auth";
import google from "../../Assets/Images/google.svg";
import apple from "../../Assets/Images/apple.svg";

function Start() {
  const Center = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #060606;
  `;
  const Button = styled.div`
    width: 350px;
    height: 55px;
    color: #060606;
    background-color: white;
    border-radius: 35px;
    font-size: 1.1rem;
    font-weight: bold;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  `;

  const Img = styled.img`
    width: 25px;
    height: 25px;
    padding-right: 10px;
  `;

  return (
    <Center>
      <Button>
        <Img src={google} />
        <span>Continue With Google</span>
      </Button>
      <Button>
        <Img src={apple} />
        <span>Continue With Apple</span>
      </Button>
    </Center>
  );
}

export default Start;
