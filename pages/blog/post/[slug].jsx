import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { getClient } from "@lib/sanity/sanity";
import { getAllPostQuery, getPostBySlug } from "querys";

const Post = ({ post }) => {
  return (
    <>
      <Box>
        <Heading>{post.title}</Heading>
      </Box>
    </>
  );
};

export default Post;

export const getStaticPaths = async ({ preview = false }) => {
  const posts = await getClient(preview).fetch(getAllPostQuery);

  const paths = posts.map((post) => ({
    params: { slug: post.slug.current },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  console.log(params.slug);
  const post = await getClient(false).fetch(getPostBySlug, {
    slug: "first-post",
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
};
