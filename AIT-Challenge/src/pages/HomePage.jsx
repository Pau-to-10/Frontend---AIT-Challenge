import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MainNavbar from "../components/MainNavbar";
import TrendingGiphy from "../components/TrendingGiphy";

const HomePage = () => {
  return (
    <>
      <MainNavbar />
      <Container>
        <Row>
          <Col>
            <h1>Trending</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <TrendingGiphy />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
