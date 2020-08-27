import Head from "next/head";
import client from "../../client";

import Image from "react-bootstrap/Image";

const ProductDetails = (props) => {
  const { title, price, size, description } = props;
  return (
    <div id="product-details-page">
      <Head>
        <title>OJOS | </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="product-details-container">
        <div id="product-image">
          <a href="/products/:id">
            <Image
              className="products"
              fluid
              src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_1086,w_724/c_scale,h_480/f_auto,dpr_1.0/202283F047080_1/31-phillip-lim-green-mini-pashli-bag.jpg"
            />
          </a>
        </div>
        <div id="product-details">
          <h1>{title}</h1>
          <p>$15.00</p>
          <select name="cars" id="cars">
            <option value="volvo">XS</option>
            <option value="saab">S</option>
            <option value="mercedes">M</option>
            <option value="audi">L</option>
          </select>
          <button>Add to Cart</button>
          <h4>Description</h4>
          <p>A beautiful handbag made from leather with gold detailing</p>
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

ProductDetails.getInitialProps = async function (context) {
  const { slug = " " } = context.query;
  return await client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0]{title, price, size, description}
  `,
    { slug }
  );
};

// *[_type == "product"]{title, "categories": categories[]->title, "defaultProductVariant": images[], price, size }

export default ProductDetails;
