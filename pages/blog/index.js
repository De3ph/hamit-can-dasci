import React from "react";
import Blog from "@components/Blog/Blog";
import { getClient } from "@lib/sanity/sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "post"] {
  title,
  mainImage,
  author -> {
    name,
    image
  }
}
`;

export const getStaticProps = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(query);
  return {
    props: {
      posts,
      preview,
    },
    revalidate: 30,
  };
};

const index = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <Blog posts={posts} />
    </>
  );
};

export default index;
