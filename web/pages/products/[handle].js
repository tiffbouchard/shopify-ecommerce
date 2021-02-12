import Head from "next/head";

import { Carousel } from "react-responsive-carousel";
import { Spinner, Toast } from "react-bootstrap";

import { ShopContext } from "../../context/shopContext";
import Instagram from "../../components/Instagram/Instagram";

const ProductDetails = (props) => {
  const [show, setShow] = React.useState(false);

  let handle = props.params.handle;

  const {
    fetchProductByHandle,
    addItemToCheckout,
    product,
  } = React.useContext(ShopContext);

  React.useEffect(() => {
    fetchProductByHandle(handle);
    return () => {};
  }, [fetchProductByHandle, handle]);

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
            zIndex: 10,
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
            <Carousel>
            {product.images.map((image) => (
                <div >
                  <img alt="product-image" src={image.src} />
                </div>
            ))}
            </Carousel>
          </div>
          <div id="product-details">
            <h1>{product.title}</h1>
            <p>
              {product.availableForSale
                ? "$" + product.variants[0].price
                : "Sold out"}
            </p>
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
