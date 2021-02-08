import { ShopContext } from "../../context/shopContext";
import Collection from "../../components/Collection/Collection";

const Jewelry = (props) => {
  const { fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "Jewelry";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  return (
    <div>
      <Collection />
    </div>
  );
};

export default Jewelry;
