import Head from "next/head";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Tops = () => {
  return (
    <div>
      <Head>
        <title>OJOS | Tops</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Tops</h1>
      <Container fluid="lg">
        <Row>
          <Col xs={12} sm={6} md={6} lg={4}>
            <div className="product-section">
              <a href="/products/:id">
                <Image
                  className="products"
                  fluid
                  src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_1.0/202731F048010_1/ys-red-clasp-pochette-shoulder-bag.jpg"
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
              <a href="/products/:id">
                <Image
                  className="products"
                  fluid
                  src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_1.0/202283F047080_1/31-phillip-lim-green-mini-pashli-bag.jpg"
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
              <a href="/products/:id">
                <Image
                  className="products"
                  fluid
                  src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_1.0/202153F048003_1/martine-ali-silver-bijoux-bag.jpg"
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
              <a href="/products/:id">
                <Image
                  className="products"
                  fluid
                  src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_1.0/202230F045005_1/comme-des-garcons-wallets-red-large-huge-logo-pouch.jpg"
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
              <a href="/products/:id">
                <Image
                  className="products"
                  fluid
                  src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_1.0/202730F045012_1/bao-bao-issey-miyake-white-lucent-pouch.jpg"
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
        </Row>
      </Container>
    </div>
  );
};

export default Tops;
