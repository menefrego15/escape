import React from "react";
import styled from "styled-components";

const Btn = styled.div`
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
  cursor: pointer;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  padding-right: 10px;
`;

const Button = ({ fx, image, text }) => {
  return (
    <Btn onClick={fx}>
      <Img src={image} />
      <span>{text}</span>
    </Btn>
  );
};

export default Button;
