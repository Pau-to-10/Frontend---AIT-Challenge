import React from "react";
import { Button, Form } from "react-bootstrap";
import MainNavbar from "../components/MainNavbar";

const UploadContent = () => {
  return (
    <>
      <MainNavbar />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Enter URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="https://media.giphy.com/media/zTxxoe3TToHbq/giphy.gif"
          />
          <Button type="submit">Upload</Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default UploadContent;
