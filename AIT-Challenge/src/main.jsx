import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-34n512ywsueffzqd.us.auth0.com"
      clientId="8YwQzJ7SxFT2Mg2QjUk3fD9jlaooP8Rm"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      audience="https://express.sample"
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>
);
