import { ShopContext } from "../../context/shopContext";
import Collection from "../../components/collection";

const Bottoms = (props) => {
  const { fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "Bottoms";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  return <Collection />;
};

export default Bottoms;
