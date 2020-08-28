import Head from "next/head";

// Sanity.io
import client from "../../client";
import urlFor from "../../imageUrlBuilder";

// Bootstrap
import Image from "react-bootstrap/Image";

const ProductDetails = (props) => {
  const { title, price, sizes, description, image, imageUrl } = props;
  const [size, setSize] = React.useState();

  const product = {
    name: { title },
    price: { price },
    quantity: 1,
    image: { imageUrl },
    size: { size },
  };

  console.log(product);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div id="product-details-page">
      <Head>
        <title>OJOS | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="product-details-container">
        <div id="product-image">
          <Image
            className="products"
            fluid
            src={urlFor(image).quality(100).url()}
          />
        </div>
        <div id="product-details">
          <h1>{title}</h1>
          <p>${price}</p>
          <select onChange={handleChange}>
            {sizes && sizes.map((size) => <option value={size}>{size}</option>)}
          </select>
          <button>Add to Cart</button>
          <h4>Description</h4>
          <p>{description}</p>
          <h4>Sizing</h4>
          <p>
            Complimentary ground shipping on all domestic orders. Returns
            accepted within 7 days of delivery on full price items. All sale
            items and masks are final sale. International shipping available to
            select countries.
          </p>
          <h4>Shipping</h4>
          <p>
            Complimentary ground shipping on all domestic orders. Returns
            accepted within 7 days of delivery on full price items. All sale
            items and masks are final sale. International shipping available to
            select countries.
          </p>
        </div>
      </div>
    </div>
  );
};

// Fetching data from Sanity.io with GROQ query
ProductDetails.getInitialProps = async function (context) {
  const { slug = " " } = context.query;
  return await client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{title, price, sizes, description, image, slug, "imageUrl": image.asset->url}
  `,
    { slug }
  );
};

export default ProductDetails;
