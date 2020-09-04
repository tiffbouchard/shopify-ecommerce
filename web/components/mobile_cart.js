import Head from "next/head";
import { ShopContext } from "../context/shopContext";

import Table from "react-bootstrap/Table";

const MobileCart = (props) => {
  const { checkout, removeItemFromCheckout } = React.useContext(ShopContext);

  return (
    <div>
      <div className="cart-wrapper">
        <Table className="cart-mobile">
          <tbody>
            {checkout.lineItems &&
              checkout.lineItems.map((item) => (
                <tr>
                  <td scope="row">
                    <img className="cart-image" src={item.variant.image.src} />
                  </td>
                  <td>
                    <p>{item.title}</p>
                    {/* <p>XS</p> */}
                    <p>${item.variant.price}</p>
                    <button
                      className="cart-delete-btn"
                      onClick={() =>
                        removeItemFromCheckout(checkout.id, item.id)
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            <tr>
              <td></td>
              <td>Subtotal: ${checkout.totalPrice}</td>
            </tr>
          </tbody>
        </Table>
        <a href={checkout.webUrl} target="_blank">
          <button className="cart-checkout-btn-mobile">Checkout</button>
        </a>
      </div>
    </div>
  );
};

export default MobileCart;
