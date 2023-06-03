import { MorphAdminAPIClient, MorphDataAPIClient } from "@morphdb/morph-client";

const adminClient = new MorphAdminAPIClient({
  teamSlug: "kimiteam",
  apiKey: "8pa1l7x7LYU4MObwtx5muL2kePyPyrccNIxXvinD1",
  // endpointUrl: "dev1-api.morphdb.io",
});

const dataClient = new MorphDataAPIClient();

export { adminClient, dataClient };
