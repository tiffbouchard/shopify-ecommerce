import Head from "next/head";
import { ShopContext } from "../context/shopContext";

//Bootstrap
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const Collection = () => {
  const { collection } = React.useContext(ShopContext);

  if (!collection.products)
    return (
      <div className="page-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  else if (!collection.products[0])
    return (
      <div>
        <h1 className="page-title">{collection.title}</h1>
        <div className="no-products-msg">
          <p>No products right now, check back later!</p>
        </div>
      </div>
    );
  return (
    <div>
      <Head>
        <title>OJOS | {collection.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">{collection.title}</h1>
      <Container fluid="lg">
        <Row>
          {collection.products.map((product) => (
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
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Collection;
