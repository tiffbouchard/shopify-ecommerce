import { Image, Spinner } from "react-bootstrap";


import { Carousel } from '@trendyol-js/react-carousel';
import { ShopContext } from "../../context/shopContext";
import Product from "../Product/Product"


const ProductCarousel = () => {
  const { collection, fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "New";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  if (!collection.products)
    return (
      <div className="page-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  else return (
    <Carousel>
      {collection.products.map((product) => (
        <Product product={product}/>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
