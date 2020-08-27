import { useState, useEffect } from "react";

function Instagram() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("https://www.instagram.com/unikaswim/?__a=1")
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
    return <div>Loading...</div>;
  } else {
    return (
      <div className="instagram-feed">
        {images.slice(0, 6).map((image) => (
          <a
            href={"http://instagram.com/p/" + image.node.shortcode}
            target="blank"
          >
            <img src={image.node.thumbnail_src} />
          </a>
        ))}
      </div>
    );
  }
}

export default Instagram;
