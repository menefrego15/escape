import React from "react";
import styled from "styled-components";
import Home from "../Assets/Images/Home.svg";
import Bell from "../Assets/Images/Bell.svg";
import Search from "../Assets/Images/Search.svg";
import Message from "../Assets/Images/Message.svg";

const Nav = styled.nav`
  width: 100px;
  height: 500px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 70%;
`;

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0;
`;

const Li = styled.li`
  padding: 0;
  margin: 0;
  text-align: center;
  cursor: pointer;
`;

const Navbar = ({ photoURL }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Img src={Home} />
        </Li>
        <Li>
          <Img src={Bell} />
        </Li>
        <Li>
          <Img src={Search} />
        </Li>
        <Li>
          <Img src={Message} />
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
