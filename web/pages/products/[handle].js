import Head from "next/head";
import { ShopContext } from "../../context/shopContext";

import Instagram from "../../components/instagram";

import { Carousel } from "react-responsive-carousel";

// Bootstrap
import { Image, Spinner, Toast } from "react-bootstrap";

const ProductDetails = (props) => {
  // const [size, setSize] = React.useState();

  // const handleChange = (event) => {
  //   setSize(event.target.value);
  // };

  const [show, setShow] = React.useState(false);

  let handle = props.params.handle;
  const {
    checkout,
    fetchProductByHandle,
    addItemToCheckout,
    product,
  } = React.useContext(ShopContext);

  // const checkIfItemInCart = async () => {
  //   console.log(checkout);
  // };
  // console.log(checkout.lineItems);
  // const currentCheckoutItems = await checkout.lineItems;
  // currentCheckoutItems.forEach((item) => {
  //   if (item.id === id) {
  //     console.log("in cart!");
  //     // this.setState({ itemInCart: true });
  //   }
  // });

  React.useEffect(() => {
    fetchProductByHandle(handle);
    return () => {};
  }, [fetchProductByHandle, handle]);

  // useEffect(() => {
  //   fetchCheckout(checkout.id);
  //   // checkIfItemInCart();
  //   return () => {};
  // }, [fetchCheckout]);

  if (!product.title)
    return (
      <div className="page-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "30px",
        }}
      >
        <Toast
          style={{
            position: "fixed",
          }}
          show={show}
          delay={3000}
          autohide
          onClose={() => setShow(false)}
        >
          <Toast.Body>You added {product.title} to your cart!</Toast.Body>
        </Toast>
      </div>
      <div id="product-details-page">
        <Head>
          <title>OJOS | {product.title}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div id="product-details-container">
          <div id="product-image">
            {product.images.map((image) => (
              <Carousel>
                <div>
                  <img alt="" src={image.src} />
                </div>
                <div>
                  <img alt="" src={image.src} />
                </div>
                <div>
                  <img alt="" src={image.src} />
                </div>
                <div>
                  <img alt="" src={image.src} />
                </div>
              </Carousel>
            ))}
          </div>
          <div id="product-details">
            <h1>{product.title}</h1>
            <p>
              {product.availableForSale
                ? "$" + product.variants[0].price
                : "Sold out"}
            </p>
            {/* Leave in in case sizes need to be implemented */}
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
            {product.availableForSale ? (
              <button
                className="add-to-cart-btn"
                onClick={() => {
                  addItemToCheckout(product.variants[0].id, 1);
                  setShow(true);
                }}
              >
                Add to Cart
              </button>
            ) : (
              <button
                disabled
                className="add-to-cart-btn"
                onClick={() => {
                  addItemToCheckout(product.variants[0].id, 1);
                  setShow(true);
                }}
              >
                Add to Cart
              </button>
            )}
            <div id="product-info">
              <h4>Description</h4>
              <p>{product.description}</p>
              <h4>Sizing</h4>
              <p>
                Complimentary ground shipping on all domestic orders. Returns
                accepted within 7 days of delivery on full price items. All sale
                items and masks are final sale. International shipping available
                to select countries.
              </p>
              <h4>Shipping</h4>
              <p>
                Complimentary ground shipping on all domestic orders. Returns
                accepted within 7 days of delivery on full price items. All sale
                items and masks are final sale. International shipping available
                to select countries.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Instagram />
    </>
  );
};

ProductDetails.getInitialProps = async function (context) {
  const params = await context.query;
  return { params: params };
};

export default ProductDetails;
