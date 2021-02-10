import Table from "react-bootstrap/Table";

import { ShopContext } from "../../context/shopContext";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const { checkout, removeItemFromCheckout } = React.useContext(ShopContext);

  return (
  <div className={styles.wrapper}>
    <Table className={styles.table}>
      <thead>
        <tr>
          <th scope="col">Product</th>
          <th scope="col"></th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {checkout && checkout.lineItems.length &&
          checkout.lineItems.map((item) => (
            <tr>
              <td scope="row">
                <button
                  className={styles.deleteBtn}
                  onClick={() =>
                    removeItemFromCheckout(checkout.id, item.id)
                  }
                >
                  X
                </button>
                <img className={styles.image} src={item.variant.image.src} />
              </td>
              <td>{item.title}</td>
              <td>{item.quantity}</td>
              <td>${item.variant.price && item.variant.price}</td>
            </tr>
          ))}
        <tr>
          <td scope="row"></td>
          <td></td>
          <td>Subtotal</td>
          <td>${checkout && checkout.totalPrice}</td>
        </tr>
        <tr>
          <td scope="row"></td>
          <td></td>
          <td></td>
          <td>
            <a href={checkout && checkout.webUrl} target="_blank">
              <button className={styles.checkoutBtn}>Checkout</button>
            </a>
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
  );
};

export default Cart;