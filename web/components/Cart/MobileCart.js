import { ShopContext } from "../../context/shopContext";

import Table from "react-bootstrap/Table";
import styles from "./Cart.module.css";

const MobileCart = (props) => {
  const { checkout, removeItemFromCheckout } = React.useContext(ShopContext);

  return (
  <div className={styles.wrapper}>
    <Table className={styles.mobile}>
      <tbody>
        {checkout && checkout.lineItems &&
          checkout.lineItems.map((item) => (
            <tr>
              <td scope="row">
                <img className={styles.image} src={item.variant.image.src} />
              </td>
              <td>
                <p>{item.title}</p>
                <p>${item.variant.price}</p>
                <button
                  className={styles.deleteBtn}
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
          <td>Subtotal: ${checkout && checkout.totalPrice}</td>
        </tr>
      </tbody>
    </Table>
    <a href={checkout && checkout.webUrl} target="_blank">
      <button className={styles.checkoutBtnMobile}>Checkout</button>
    </a>
  </div>
  );
};

export default MobileCart;
