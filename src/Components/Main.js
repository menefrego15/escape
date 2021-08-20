import React from "react";
import styled from "styled-components";
import Card from "./Card";

const MainContainer = styled.div`
  width: 95%;
  height: 95%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Column = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

const Main = () => {
  return (
    <MainContainer>
      <Card main />
      <Column>
        <Card secondary />
        <Card secondary />
      </Column>
    </MainContainer>
  );
};

export default Main;
