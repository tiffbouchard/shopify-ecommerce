import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  domain: "ojos-shop.myshopify.com",
  storefrontAccessToken: "a5486d87a0b9c4738c23a0abe8fb56d2",
});

class ShopProvider extends React.Component {
  state = {
    collection: {},
    products: [],
    product: {},
    checkout: {},
    searchResults: [],
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
  
  fetchCheckout = async (checkoutId) => {
    client.checkout
      .fetch(checkoutId)
      .then((checkout) => {
        this.setState({ checkout: checkout });
      })
      .catch((err) => console.log(err));
  };

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    this.setState({ checkout: checkout });
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

  removeItemFromCheckout = async (checkoutId, lineItemsIds) => {
    const checkoutIdToModify = await checkoutId; // ID of an existing checkout
    const lineItemsIdToRemove = await lineItemsIds;
    // Remove an item from the checkout
    client.checkout
      .removeLineItems(checkoutIdToModify, lineItemsIdToRemove)
      .then((checkout) => {
        // Do something with the updated checkout
        this.setState({ checkout: checkout });
        const checkoutTotal = parseInt(this.state.checkoutTotal, 10) - 1;
        this.setState({ checkoutTotal: checkoutTotal });
        localStorage.setItem("checkoutTotal", this.state.checkoutTotal);
      });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductByHandle = async (handle) => {
    const product = await client.product.fetchByHandle(handle);
    this.setState({ product: product });
  };

  fetchCollection = async (query) => {
    const collections = await client.collection.fetchAllWithProducts();
    collections.map((collection) =>
      collection.title === query
        ? this.setState({ collection: collection })
        : null
    );
  };

  fetchBySearch = async (query) => {
    const products = await client.product.fetchAll();
    console.log(products);
    const searchResults = products.filter((product) => {
      const productTitle = product.title.toUpperCase();
      const productType = product.productType.toUpperCase();
      const userQuery = query.toUpperCase();
      return (
        productTitle.includes(userQuery) || productType.includes(userQuery)
      );
    });
    this.setState({ searchResults: searchResults });
    console.log(searchResults);
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductByHandle: this.fetchProductByHandle,
          addItemToCheckout: this.addItemToCheckout,
          removeItemFromCheckout: this.removeItemFromCheckout,
          fetchCollection: this.fetchCollection,
          fetchBySearch: this.fetchBySearch,
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
