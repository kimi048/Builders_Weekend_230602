import { createApi } from "unsplash-js";
import * as nodeFetch from "node-fetch";

export const unsplash = createApi({
  apiUrl: "https://mywebsite.com/unsplash-proxy",
  fetch: nodeFetch.default as unknown as typeof fetch,
});
