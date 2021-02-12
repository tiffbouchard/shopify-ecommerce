import styles from "./Product.module.css";

const Product = ({product}) => {
  return (
    <div>
      <div className={styles.imgWrapper}>
        <a href={`/products/${product.handle}`}>
          <img
            src={product.images[0].src}
          />
        </a>
      </div>
      <div className={styles.description}>
        <a
          href={`/products/${product.handle}`}
          className={styles.name}
        >
          {product.title}
        </a>
        <a href={`/products/${product.handle}`} className={styles.price}>
          {product.availableForSale
            ? "$" + product.variants[0].price
            : "Sold out"}
        </a>
      </div>
    </div>
  );
};

export default Product;
