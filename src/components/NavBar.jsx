import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PageContext from "../context/PageContext";
import Badge from "../shared/Badge";

// keep style outside of function to avoid recreating each render
/**
 * colors and fonts
 * @type {React.CSSProperties}
 */
const style = {
  fontWeight: "bold",
  marginLeft: 20,
  marginRight: 20
};

export default function NavBar({ count }) {
  const pageContext = useContext(PageContext);
  console.log("page context", pageContext);
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Badge pill variant="primary" style={{...style}}> 
        {count}
      </Badge>
      <Nav className="mr-auto">
        <Nav.Link href="#" onClick={() => pageContext.setPage('login')}>Login</Nav.Link>
        <Nav.Link href="#" onClick={() => pageContext.setPage('counters')}>Counters</Nav.Link>
      </Nav>
    </Navbar>
  );
}
