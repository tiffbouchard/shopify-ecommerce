import Head from "next/head";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

const About = () => {
  // if (!checkout.lineItems)
  //   return (
  //     <div className="page-spinner">
  //       <Spinner animation="border" role="status">
  //         <span className="sr-only">Loading...</span>
  //       </Spinner>
  //     </div>
  //   );
  return (
    <div>
      <Head>
        <title>OJOS | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">About</h1>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="about-image-one">
              <Image
                fluid
                src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/IMG_6049_1200x.jpg?v=1596433120"
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="about-paragraph">
              <p>
                Loremssss ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="about-paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="about-image-two">
              <Image
                fluid
                src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/KKCO-9_1200x.jpg?v=1595571332"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
