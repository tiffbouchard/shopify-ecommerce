import Head from "next/head";

// Bootstrap
import { Row, Col, Container, Image } from "react-bootstrap";

import Instagram from "../components/Instagram/Instagram";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel"
// Sanity.io
import client from "../client";
import urlFor from "../imageUrlBuilder";


const Home = (props) => {
  const { images = [] } = props;

  // Assigns variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image, maybe find better way to accomplish)
  const imageOne = images.filter((image) => {
    return image.title === "Image One";
  });

  const imageTwo = images.filter((image) => {
    return image.title === "Image Two";
  });

  const imageThree = images.filter((image) => {
    return image.title === "Image Three";
  });

  const imageFour = images.filter((image) => {
    return image.title === "Image Four";
  });

  return (
    <>
      <Head>
        <title>OJOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <div className="landing-image-one">
              <a href={imageOne[0].url}>
                <Image
                  fluid
                  src={urlFor(imageOne[0].image).quality(100).url()}
                />
              </a>
              <a href={imageOne[0].url} className="image-description">
                {imageOne[0].description}
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={7}>
            <div className="landing-image-two">
              <a href={imageTwo[0].url}>
                <Image
                  fluid
                  src={urlFor(imageTwo[0].image).quality(100).url()}
                />
              </a>
              <a href={imageTwo[0].url} className="image-description">
                {imageTwo[0].description}
              </a>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5 mb-5">
          <h2 className="mb-3">New Arrivals</h2>
          <ProductCarousel/>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="landing-image-three">
              <a href={imageThree[0].url}>
                <Image
                  fluid
                  src={urlFor(imageThree[0].image).quality(100).url()}
                />
              </a>
              <a href={imageThree[0].url} className="image-description">
                {imageThree[0].description}
              </a>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="landing-image-four">
              <a href={imageFour[0].url}>
                <Image
                  fluid
                  src={urlFor(imageFour[0].image).quality(100).url()}
                />
              </a>
              <a href={imageFour[0].url} className="image-description">
                {imageFour[0].description}
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <Instagram />
    </>
  );
};

// Fetching data from Sanity.io with GROQ query
Home.getInitialProps = async () => ({
  images: await client.fetch(`
  *[_type == "homepage"]{url, description, title, image}
  `),
});

export default Home;
