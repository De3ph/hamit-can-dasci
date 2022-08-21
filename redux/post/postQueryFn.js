import { getClient } from "@lib/sanity/sanity";

export const sanityBaseQuery = ({ baseQuery } = { baseQuery: "" }) => {
  async ({ query }) => {
    try {
      const posts = await getClient(preview).fetch(query);
      return { posts: posts };
    } catch (error) {
      return new Error("Could not fetch posts");
    }
  };
};
