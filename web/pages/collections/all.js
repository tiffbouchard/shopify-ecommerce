import Head from "next/head";

import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

import { ShopContext } from "../../context/shopContext";

const AllProducts = (props) => {
  const { fetchAllProducts, products } = React.useContext(ShopContext);

  React.useEffect(() => {
    fetchAllProducts();
    return () => {};
  }, [fetchAllProducts]);

  if (!products)
    return (
      <div className="page-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  return (
    <div>
      <Head>
        <title>OJOS | All</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">All</h1>
      <Container fluid="lg">
        <Row>
          {products ? (
            products.map((product) => (
              <Col xs={12} sm={6} md={6} lg={4} key={product.id}>
                <div className="product-section">
                  <a href={`/products/${product.handle}`}>
                    <Image
                      className="products"
                      fluid
                      src={product.images[0].src}
                    />
                  </a>
                </div>
                <div className="product-description">
                  <a
                    href={`/products/${product.handle}`}
                    className="product-name"
                  >
                    {product.title}
                  </a>
                  <a href="/products/:id" className="product-price">
                    {product.availableForSale
                      ? "$" + product.variants[0].price
                      : "Sold out"}
                  </a>
                </div>
              </Col>
            ))
          ) : (
            <div className="no-results-msg">
              <p>No products right now, check back later!</p>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default AllProducts;
