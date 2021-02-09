import styles from "./Nav.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <div className={styles.navLeft}>
        <div className={styles.dropdown}>
          <button className={styles.dropdownBtn}>Shop</button>
          <nav className={styles.dropdownContent}>
            <a href="/collections/new">New</a>
            <a href="/collections/tops">Tops</a>
            <a href="/collections/bottoms">Bottoms</a>
            <a href="/collections/accessories">Accessories</a>
            <a href="/collections/bags">Bags</a>
            <a href="/collections/jewelry">Jewelry</a>
          </nav>
        </div>
        <a href="/about">About</a>
      </div>
      <div id={styles.navHeader}>
        <a href="/">OJOS</a>
      </div>
      <div>
        <a href="/search">Search</a>
        <a href="/cart">Cart</a>
      </div>
    </nav>
  );
};

export default Navigation;

