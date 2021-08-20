import React, { useEffect, useState } from "react";
import firebase from "../../Firebase/firebase";
import { useHistory } from "react-router";
import styled from "styled-components";
import Navbar from "../../Components/Navbar";
import Main from "../../Components/Main";
import Plus from "../../Assets/Images/Plus.svg";

const Maincontainer = styled.div`
  width: 90%;
  margin: 20px;
`;

const Div = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
`;

const PlusContainer = styled.div`
  width: 40px;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  border-radius: ${(props) => (props.rounded ? "25px" : "0px")};
`;

const Home = () => {
  const history = useHistory();
  const [userInfo, setuserInfo] = useState();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        history.push("/");
      } else {
        setuserInfo(user);
        console.log(userInfo);
      }
    });
  }, [userInfo]);

  const logOut = () => {
    firebase
      .auth()
      .signOut()
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  if (userInfo) {
    return (
      <Div>
        <Navbar photoURL={userInfo.photoURL} />
        <Maincontainer>
          <Main />
        </Maincontainer>
        <PlusContainer>
          <Img src={Plus} />
        </PlusContainer>
      </Div>
    );
  } else {
    return <></>;
  }
};

export default Home;
