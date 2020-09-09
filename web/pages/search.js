import Head from "next/head";
import { ShopContext } from "../context/shopContext";

import { Container, Image, Row, Col } from "react-bootstrap";

const Contact = () => {
  const { searchResults, fetchBySearch } = React.useContext(ShopContext);
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = query;
    fetchBySearch(searchQuery);
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <Head>
        <title>OJOS | Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <form type="search" className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          className="search-form-input"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className="search-form-input-button">
          Go
        </button>
      </form>
      <Container fluid="lg">
        <Row>
          {searchResults.length ? (
            searchResults.map((result) => (
              <Col xs={12} sm={6} md={6} lg={4} key={result.id}>
                <div className="product-section">
                  <a href={`/products/${result.handle}`}>
                    <Image
                      className="products"
                      fluid
                      src={result.images[0].src}
                    />
                  </a>
                </div>
                <div className="product-description">
                  <a
                    href={`/products/${result.handle}`}
                    className="product-name"
                  >
                    {result.title}
                  </a>
                  <a href="/products/:id" className="product-price">
                    {result.availableForSale
                      ? "$" + result.variants[0].price
                      : "Sold out"}
                  </a>
                </div>
              </Col>
            ))
          ) : (
            <div className="no-results-msg">No Results</div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
