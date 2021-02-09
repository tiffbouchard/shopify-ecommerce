import { Navbar, Nav } from "react-bootstrap";

import ModalSubscribe from "../ModalSubscribe/ModalSubscribe";

const Footer = () => {
  const [modalShow, setModalShow] = React.useState();

  React.useEffect(() => {
    if (sessionStorage.getItem("closeButtonClicked") === true) {
      setModalShow(false);
    }
    if (localStorage.getItem("subscribed") === true) {
      setModalShow(false);
    } else {
      setModalShow(true);
      console.log(modalShow)
    }
  }, []);

  return (
    <Navbar className="footer" bg="white" fixed="sticky" expand="md">
      <Nav className="mr-auto">
        <Nav.Link href="/contact">Contact</Nav.Link>
        <Nav.Link href="/policy">Store Policy</Nav.Link>
        <Nav.Link onClick={() => setModalShow(true)}>Subscribe</Nav.Link>
        <ModalSubscribe show={modalShow} onHide={() => setModalShow(false)} />
      </Nav>
      <Nav>
        <Nav.Link target="blank" href="http://tiffbouchard.com">
          ©2020 OJOS - Built & Designed by Tiffany Bouchard 🌱
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Footer;
