import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";

const LoginButton = () => {
  const { loginWithPopup } = useAuth0();
  return (
    <>
      <Button variant="dark" onClick={() => loginWithPopup()}>
        Login
      </Button>
    </>
  );
};

export default LoginButton;
