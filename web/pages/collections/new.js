import { ShopContext } from "../../context/shopContext";
import Collection from "../../components/Collection/Collection";

const New = (props) => {
  const { fetchCollection } = React.useContext(ShopContext);

  React.useEffect(() => {
    let query = "New";
    fetchCollection(query);
    return () => {};
  }, [fetchCollection]);

  return (
    <div>
      <Collection />
    </div>
  );
};

export default New;
