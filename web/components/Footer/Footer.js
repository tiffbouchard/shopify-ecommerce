import { Navbar, Nav } from "react-bootstrap";

import ModalSubscribe from "../ModalSubscribe/ModalSubscribe";

export default function Footer() {
  const [modalShow, setModalShow] = React.useState();

  React.useEffect(() => {
    const closeClicked = sessionStorage.getItem("closeButtonClicked");
    const subscribed = localStorage.getItem("subscribed");

    if (closeClicked || subscribed) {
      setModalShow(false);
    } else {
      setModalShow(true)
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

