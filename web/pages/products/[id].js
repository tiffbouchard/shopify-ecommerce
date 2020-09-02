import Head from "next/head";
import { ShopContext } from "../../context/shopContext";

// Sanity.io
import client from "../../client";
import urlFor from "../../imageUrlBuilder";

// Bootstrap
import Image from "react-bootstrap/Image";
import { useEffect } from "react";

const ProductDetails = (props) => {
  // const [size, setSize] = React.useState();
  // const [product, setProduct] = React.useState();

  // const handleChange = (event) => {
  //   setSize(event.target.value);
  // };

  // const handleClick = () => {
  //   setProduct(currentProduct);
  //   localStorage.setItem("product", JSON.stringify(currentProduct));
  // };

  let id = props.params.id;
  const { fetchProductById, addItemToCheckout, product } = React.useContext(
    ShopContext
  );

  useEffect(() => {
    fetchProductById(id);
    return () => {};
  }, [fetchProductById, id]);

  if (!product.title) return <div>Loading...</div>;
  return (
    <div id="product-details-page">
      <Head>
        <title>OJOS | {product.title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="product-details-container">
        <div id="product-image">
          <Image className="products" fluid src={product.images[0].src} />
        </div>
        <div id="product-details">
          <h1>{product.title}</h1>
          <p>${product.variants[0].price}</p>
          {/* <select id="size-select" onChange={handleChange}>
            <option key="null">Select Size</option>
            {sizes &&
              sizes.map((size) => <option value={size} key={size}></option>)}
          </select>
          {size === undefined || size === "Select Size" ? (
            <button disabled className="add-to-cart-btn">
              Add to Cart
            </button>
          ) : (
          )} */}
          <button
            className="add-to-cart-btn"
            onClick={() => addItemToCheckout(product.variants[0].id, 1)}
          >
            Add to Cart
          </button>
          <h4>Description</h4>
          <p>{product.description}</p>
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
  const params = await context.query;
  return { params: params };
};

export default ProductDetails;
