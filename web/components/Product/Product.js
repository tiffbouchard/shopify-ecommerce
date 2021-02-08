import { Image } from "react-bootstrap";

const Product = ({product}) => {
    return (
      <div>
        <div className="product-section">
        <a href={`/products/${product.handle}`}>
          <Image
            className="products"
            fluid
            src={product.images[0].src}
          />
        </a>
      </div>
      <div className="product-description">
        <a
          href={`/products/${product.handle}`}
          className="product-name"
        >
          {product.title}
        </a>
        <a href={`/products/${product.handle}`} className="product-price">
          {product.availableForSale
            ? "$" + product.variants[0].price
            : "Sold out"}
        </a>
        </div>
      </div>
  );
};

export default Product;
