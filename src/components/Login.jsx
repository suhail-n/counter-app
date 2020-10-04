import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import PageContext from "../context/PageContext";

export default function Login({ onLogin }) {
  const pageContext = useContext(PageContext);
  let username = "";
  return (
    <Container>
      <Form className="mt-2">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            onChange={(e) => {
              username = e.target.value;
            }}
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={() => {
            onLogin(username) || pageContext.setPage("counters");
          }}
        >
          Login
        </Button>
      </Form>
    </Container>
  );
}
