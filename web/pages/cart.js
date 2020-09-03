import Head from "next/head";
import MobileCart from "../components/mobile_cart";
import { ShopContext } from "../context/shopContext";

import Table from "react-bootstrap/Table";

const Cart = (props) => {
  const { checkout, removeItemFromCheckout } = React.useContext(ShopContext);

  if (checkout.lineItems && checkout.lineItems.length < 1)
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
      <div className="cart-wrapper">
        <Table className="cart-table">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col"></th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <tr>
                  <td scope="row">
                    <button
                      className="cart-delete-btn"
                      onClick={() =>
                        removeItemFromCheckout(checkout.id, item.id)
                      }
                    >
                      X
                    </button>
                    <a href="instagram.com">
                      <img
                        className="cart-image"
                        src={item.variant.image.src}
                      />
                    </a>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.quantity}</td>
                  <td>${item.variant.price}</td>
                </tr>
              ))}
            <tr>
              <td scope="row"></td>
              <td></td>
              <td>Subtotal</td>
              <td>${checkout.totalPrice}</td>
            </tr>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td>
                <a href={checkout.webUrl} target="_blank">
                  <button className="cart-checkout-btn">Checkout</button>
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <MobileCart />
    </div>
  );
};

export default Cart;
