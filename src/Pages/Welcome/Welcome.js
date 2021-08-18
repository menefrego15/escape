import React from "react";
import styled from "styled-components";

function Start() {
  const Center = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `;
  const Button = styled.button`
    width: 100px;
    height: 40px;
  `;
  return (
    <Center>
      <Button>Login</Button>
    </Center>
  );
}

export default Start;
