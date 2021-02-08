import { ShopContext } from "../../context/shopContext";
import Collection from "../../components/Collection/Collection";

const Bags = (props) => {
  const { fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "Bags";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  return (
    <div>
      <Collection />
    </div>
  );
};

export default Bags;
