import client from "./client";
import imageUrlBuilder from "@sanity/image-url";

// imageUrlBuilder method from Sanity.io in order to retrieve higher quality images
const builder = imageUrlBuilder(client);

export default function urlFor(source) {
  return builder.image(source);
}
