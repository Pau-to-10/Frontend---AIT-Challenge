import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import MainNavbar from "../components/MainNavbar";

const HomePage = () => {
  return (
    <>
      <MainNavbar />
      <h1>HomePage</h1>
    </>
  );
};

export default HomePage;
