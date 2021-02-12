import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "vbpxqaqc", // from sanity.json
  dataset: "production",
  useCdn: true, 
});
