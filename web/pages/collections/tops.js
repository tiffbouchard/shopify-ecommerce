import { ShopContext } from "../../context/shopContext";
import Collection from "../../components/Collection/Collection";

const Tops = (props) => {
  const { fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "Tops";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  return (
    <div>
      <Collection />
    </div>
  );
};

export default Tops;
