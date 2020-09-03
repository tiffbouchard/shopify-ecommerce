import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "ojos-store.myshopify.com",
  storefrontAccessToken: "e52f8498c6bb5dea9c7c6670860b7224",
});

class ShopProvider extends React.Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    checkoutTotal: 0,
  };

  componentDidMount() {
    if (localStorage.checkout) {
      this.fetchCheckout(localStorage.checkout);
    } else {
      this.createCheckout();
    }
    if (localStorage.checkoutTotal) {
      const checkoutTotal = localStorage.getItem("checkoutTotal");
      this.setState({ checkoutTotal: checkoutTotal });
    }
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    this.setState({ checkout: checkout });
  };

  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemsToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];
    const checkout = await client.checkout.addLineItems(
      this.state.checkout.id,
      lineItemsToAdd
    );
    this.setState({ checkout: checkout });
    const checkoutTotal = parseInt(this.state.checkoutTotal, 10) + 1;
    this.setState({ checkoutTotal: checkoutTotal });
    localStorage.setItem("checkoutTotal", this.state.checkoutTotal);
  };

  // incrementCheckoutTotal = async () => {
  //   const checkoutTotal =
  //   this.setState({ checkoutTotal: this.state.checkoutTotal });
  //   localStorage.setItem("checkoutTotal", this.state.checkoutTotal);
  // }

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductById = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductById: this.fetchProductById,
          incrementCheckoutTotal: this.incrementCheckoutTotal,
          addItemToCheckout: this.addItemToCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
