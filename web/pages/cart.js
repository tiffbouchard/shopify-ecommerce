import Head from "next/head";
import { shopContext, ShopContext } from "../context/shopContext";

import Table from "react-bootstrap/Table";

const Cart = (props) => {
  const { checkout } = React.useContext(ShopContext);

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
              <th scope="col">Details</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <button className="cart-delete-btn">X</button>
                <a href="instagram.com">
                  <img
                    className="cart-image"
                    src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/202030F069010_1/citizens-of-humanity-blue-annanina-jeans.jpg"
                  />
                </a>
              </td>
              <td>XS</td>
              <td>1</td>
              <td>$30.00</td>
            </tr>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td>Subtotal</td>
              <td>$100.00</td>
            </tr>
            <tr>
              <td scope="row"></td>
              <td></td>
              <td></td>
              <td>
                <button className="cart-checkout-btn">Checkout</button>
              </td>
            </tr>
          </tbody>
        </Table>
        <Table className="cart-mobile">
          <tbody>
            <tr>
              <td scope="row">
                <a href="instagram.com">
                  <img
                    className="cart-image"
                    src="https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_1.0/202030F069010_1/citizens-of-humanity-blue-annanina-jeans.jpg"
                  />
                </a>
              </td>
              <td>
                <p>Product Name</p>
                <p>XS</p>
                <p>$30.00</p>
                <button className="cart-delete-btn">Remove</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>Subtotal: $100.00</td>
            </tr>
          </tbody>
        </Table>
        <button role="link" className="cart-checkout-btn-mobile">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
