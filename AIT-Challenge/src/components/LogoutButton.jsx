import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Button } from "react-bootstrap";

export const LogoutButton = () => {
  const { logout } = useAuth0();

  function logoutWrapper() {
    logout({ returnTo: window.location.origin + "/auth" });
  }

  return <Button onClick={() => logoutWrapper()}>Logout</Button>;
};
