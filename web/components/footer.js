import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import SubscribeModal from "./modal-subscribe";

const Footer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Navbar className="footer" bg="white" fixed="sticky" expand="md">
      <Nav className="mr-auto">
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/policy">Store Policy</Nav.Link>
        <Nav.Link onClick={() => setModalShow(true)}>Subscribe</Nav.Link>
        <SubscribeModal show={modalShow} onHide={() => setModalShow(false)} />
      </Nav>
      <Nav>
        <Nav.Link href="http://tiffbouchard.com">
          ©2020 OJOS - Built & Designed by Tiffany Bouchard 🌱
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
