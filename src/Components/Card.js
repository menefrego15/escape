import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: ${(props) => (props.secondary ? "100%" : "50%")};
  height: ${(props) => (props.main ? "99%" : "50%")};
  background-color: white;
  border-radius: 40px;
  margin: 5px;
`;

const Card = ({ main, secondary }) => {
  return <CardContainer main={main} secondary={secondary}></CardContainer>;
};

export default Card;
