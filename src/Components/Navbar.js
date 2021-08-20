import React from "react";
import styled from "styled-components";
import Home from "../Assets/Images/Home.svg";
import Bell from "../Assets/Images/Bell.svg";
import Search from "../Assets/Images/Search.svg";
import Message from "../Assets/Images/Message.svg";

const Nav = styled.nav`
  width: 100px;
  height: 650px;
  margin-left: 20px;
  display: flex;
  color: #fff;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  border-radius: ${(props) => (props.rounded ? "25px" : "0px")};
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

const Imgdiv = styled.div`
  width: ${(props) => (props.current || props.avatar ? "45px" : "30px")};
`;

const Navbar = ({ photoURL }) => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Imgdiv avatar>
            <Img rounded src={photoURL} />
          </Imgdiv>
        </Li>
        <Li>
          <Imgdiv current>
            <Img src={Home} />
          </Imgdiv>
        </Li>
        <Li>
          <Imgdiv>
            <Img src={Bell} />
          </Imgdiv>
        </Li>
        <Li>
          <Imgdiv>
            <Img src={Message} />
          </Imgdiv>
        </Li>
        <Li>
          <Imgdiv>
            <Img src={Search} />
          </Imgdiv>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
