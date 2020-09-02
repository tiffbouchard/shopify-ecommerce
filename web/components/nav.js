import { ShopContext } from "../context/shopContext";

const Navigation = () => {
  const [clicked, setClicked] = React.useState(false);
  const toggleClick = () => setClicked(!clicked);

  const { checkoutTotal } = React.useContext(ShopContext);

  return (
    <>
      <nav className="navigation">
        <div id="nav-two">
          <button onClick={toggleClick}>Shop</button>
          <a href="/about">About</a>
        </div>
        <div id="nav-header">
          <a href="/">OJOS</a>
        </div>
        <div id="nav-two">
          <a href="/search">Search</a>
          <a href="/cart">Cart {checkoutTotal > 0 ? checkoutTotal : "()"}</a>
        </div>
      </nav>
      <nav className={clicked ? "dropdown-nav-hover" : "dropdown-nav"}>
        <a href="/collections/new">New</a>
        <a href="/collections/tops">Tops</a>
        <a href="/collections/bottoms">Bottoms</a>
        <a href="/collections/accessories">Accessories</a>
        <a href="/collections/bags">Bags</a>
        <a href="/collections/jewelry">Jewelry</a>
      </nav>
    </>
  );
};

export default Navigation;
