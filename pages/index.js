import Head from "next/head";
import Nav from "../components/nav";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Head>
        <title>OJOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <a href="">
              <div className="landing-image-one">
                <Image
                  fluid
                  src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/IMG_6049_1200x.jpg?v=1596433120"
                />
                <a href="/products/:id" className="image-description">
                  Some text
                </a>
              </div>
            </a>
          </Col>
          <Col xs={12} sm={12} md={7}>
            <a href="">
              <div className="landing-image-two">
                <Image
                  fluid
                  src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/KKCO-9_1200x.jpg?v=1595571332"
                />
                <a href="/products/:id" className="image-description">
                  Some text
                </a>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <a href="">
              <div className="landing-image-three">
                <Image
                  fluid
                  src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/BREDA-KkCo_Postcard_FINAL-01_f0e05425-7a84-4760-ab29-6765ebfca32e_1200x.jpg?v=1596214451"
                />
                <a href="/products/:id" className="image-description">
                  Some text
                </a>
              </div>
            </a>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <a href="">
              <div className="landing-image-four">
                <Image
                  fluid
                  src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/C1_0625_1200x.jpg?v=1592541154"
                />
                <a href="/products/:id" className="image-description">
                  Some text
                </a>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
