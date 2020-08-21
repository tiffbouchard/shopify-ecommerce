import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <Navbar bg="white" fixed="sticky" expand="md">
      <Nav className="mr-auto">
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/policy">Store Policy</Nav.Link>
        <Nav.Link href="http://tiffbouchard.com">
          ©2020 OJOS - Built by T
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
