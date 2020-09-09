import { Spinner } from "react-bootstrap";

function Instagram() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://www.instagram.com/ssense/?__a=1")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setImages(result.graphql.user.edge_owner_to_timeline_media.edges);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <div className="ig-spinner">
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <div className="instagram-feed">
        {images.slice(0, 6).map((image) => (
          <a
            href={"http://instagram.com/p/" + image.node.shortcode}
            target="blank"
            key={image.node.shortcode}
          >
            <img src={image.node.thumbnail_src} />
          </a>
        ))}
      </div>
    );
  }
}

export default Instagram;
