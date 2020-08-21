import Head from "next/head";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Accessories = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Accessories</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Accessories</h1>
      <Container fluid="lg">
        <Row>
          <Col sm={4} md={4}>
            <a href="/products/:id">
              <Image
                className="products"
                fluid
                src="https://www.gamudacove.com.my/media/img/default-img.jpg"
              />
            </a>
            <div className="product-description">
              <a href="/products/:id" className="product-name">
                Product Name
              </a>
              <a href="/products/:id" className="product-price">
                $15.00
              </a>
            </div>
          </Col>
          <Col sm={4} md={4}>
            <Image
              className="products"
              fluid
              src="https://www.gamudacove.com.my/media/img/default-img.jpg"
            />
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
          <Col sm={4} md={4}>
            <Image
              className="products"
              fluid
              src="https://www.gamudacove.com.my/media/img/default-img.jpg"
            />
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
          <Col sm={4} md={4}>
            <Image
              className="products"
              fluid
              src="https://www.gamudacove.com.my/media/img/default-img.jpg"
            />
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
          <Col sm={4} md={4}>
            <Image
              className="products"
              fluid
              src="https://www.gamudacove.com.my/media/img/default-img.jpg"
            />
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Accessories;
