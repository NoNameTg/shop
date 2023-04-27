import SanityClient from "@sanity/client";
import config from "./config";

const client = SanityClient({
  projectId: config.projectId,
  dataset: config.dataset,
  useCdn: true,
});

export default client;
