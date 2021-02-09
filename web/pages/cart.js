import Head from "next/head";
import MobileCart from "../components/Cart/MobileCart";
import DesktopCart from "../components/Cart/DesktopCart";
import { ShopContext } from "../context/shopContext";

import { Table, Spinner } from "react-bootstrap";

const Cart = (props) => {
  const { checkout, removeItemFromCheckout } = React.useContext(ShopContext);
  console.log(checkout)

  if (checkout && !checkout.lineItems)
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
        <div className="cart-wrapper">
          <div>Your cart is empty!</div>
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
