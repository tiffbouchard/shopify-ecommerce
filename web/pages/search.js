import Head from "next/head";

import { Container, Image, Row, Col } from "react-bootstrap";

import { ShopContext } from "../context/shopContext";
import Product from "../components/Product/Product";

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
          name="search-input"
          placeholder="Search"
          className="search-form-input"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" name="search-submit" className="search-form-input-button">
          Go
        </button>
      </form>
      <Container fluid="lg">
        <Row>
          {searchResults.length ? (
            searchResults.map((result) => (
              <Col xs={12} sm={6} md={6} lg={4} key={result.id}>
                <Product product={result}/>
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
