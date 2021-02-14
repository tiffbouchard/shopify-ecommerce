import Head from "next/head";

import { Spinner } from "react-bootstrap";

import MobileCart from "../components/Cart/MobileCart";
import DesktopCart from "../components/Cart/DesktopCart";
import { ShopContext } from "../context/shopContext";

const Cart = (props) => {
  const { checkout } = React.useContext(ShopContext);

  if (!checkout.lineItems)
    return (
      <div className="page-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  else if (checkout && checkout.lineItems.length < 1)
    return (
      <div>
        <Head>
          <title>OJOS | Cart</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="page-title">Cart</h1>
        <div className="d-flex justify-content-center">
          <div>Your cart is empty! Fill it with some goodies ☺</div>
        </div>
      </div>
    );
  return (
    <div>
      <Head>
        <title>OJOS | Cart</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="page-title">Cart</h1>
      <DesktopCart />
      <MobileCart />
    </div>
  );
};

export default Cart;
