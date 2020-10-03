import Head from "next/head";

import client from "../client";
import urlFor from "../imageUrlBuilder";

import { Row, Col, Container, Image } from "react-bootstrap";

const About = (props) => {
  const { sections = [] } = props;

  const sectionOne = sections.filter((section) => {
    return section.title === "Section One";
  });

  const sectionTwo = sections.filter((section) => {
    return section.title === "Section Two";
  });

  return (
    <div>
      <Head>
        <title>OJOS | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">About</h1>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="about-image-one">
              <Image
                fluid
                src={urlFor(sectionOne[0].image).quality(100).url()}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="about-paragraph">
              <p>{sectionOne[0].description}</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <div className="about-paragraph">
              <p>{sectionTwo[0].description}</p>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className="about-image-two">
              <Image
                fluid
                src={urlFor(sectionTwo[0].image).quality(100).url()}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// Fetching data from Sanity.io with GROQ query
About.getInitialProps = async () => ({
  sections: await client.fetch(`
  *[_type == "about"]{description, image, title}
  `),
});

export default About;
