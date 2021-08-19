import React, { useEffect, useState } from "react";
import firebase from "../../Firebase/firebase";
import { useHistory } from "react-router";
import Navbar from "../../Components/Navbar";

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
      <div>
        <Navbar />
      </div>
    );
  } else {
    return <></>;
  }
};

export default Home;
