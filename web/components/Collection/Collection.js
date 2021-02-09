import Head from "next/head";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import { ShopContext } from "../../context/shopContext";
import Product from "../Product/Product"

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
              <Product product={product}/>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Collection;
