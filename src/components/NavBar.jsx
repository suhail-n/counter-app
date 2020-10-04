import React, { useContext } from "react";
import { Navbar, Badge, Nav } from "react-bootstrap";
import PageContext from "../context/PageContext";

export default function NavBar({ count }) {
  const pageContext = useContext(PageContext);
  console.log("page context", pageContext);

  const style = {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginRight: 20
  };

  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Badge pill variant="secondary" style={{ ...style }}>
        {count}
      </Badge>
      <Nav className="mr-auto">
        <Nav.Link href="#" onClick={() => pageContext.setPage('login')}>Login</Nav.Link>
        <Nav.Link href="#" onClick={() => pageContext.setPage('counters')}>Counters</Nav.Link>
      </Nav>
    </Navbar>
  );
}
