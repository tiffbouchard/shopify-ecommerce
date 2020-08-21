import Head from "next/head";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const New = () => {
  return (
    <div>
      <Head>
        <title>OJOS | New Arrivals</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">New Arrivals</h1>
      <Container fluid="lg">
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="product-section">
              <a href="/products/:id">
                <Image
                  className="products"
                  fluid
                  src="https://cdn.shopify.com/s/files/1/0021/9919/1618/products/FRONT_LEMONPEPPERCHECK.jpg?v=1597985531"
                />
              </a>
            </div>
            <div className="product-description">
              <a href="/products/:id" className="product-name">
                Product Name
              </a>
              <a href="/products/:id" className="product-price">
                $15.00
              </a>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="product-section">
              <Image
                className="products"
                fluid
                src="https://cdn.shopify.com/s/files/1/0021/9919/1618/products/lime_Tank_front_adel_720x.jpg?v=1595566753"
              />
            </div>
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="product-section">
              <Image
                className="products"
                fluid
                src="https://cdn.shopify.com/s/files/1/0021/9919/1618/files/aaScreen-Shot-2020-06-01-at-10.31.25-AM_1200x.jpg?v=1591126951"
              />
            </div>
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="product-section">
              <Image
                className="products"
                fluid
                src="https://www.gamudacove.com.my/media/img/default-img.jpg"
              />
            </div>
            <div className="product-description">
              <p className="product-name">Product Name</p>
              <p className="product-price">$15.00</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="product-section">
              <Image
                className="products"
                fluid
                src="https://www.gamudacove.com.my/media/img/default-img.jpg"
              />
            </div>
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

export default New;
