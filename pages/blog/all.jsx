import { Box, Text } from "@chakra-ui/react";
import { getClient } from "@lib/sanity/sanity";
import { groq } from "next-sanity";

const query = groq`
*[_type == "post"] {
  title,
  mainImage,
  body,
  author -> {
    name
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
      <div>a</div>
      {posts.map((post, key) => {
        return (
          <Box key={key}>
            <Text>{post.title}</Text>
          </Box>
        );
      })}
    </>
  );
};

export default index;
