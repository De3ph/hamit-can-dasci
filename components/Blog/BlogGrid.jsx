import { SimpleGrid, Box } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

const BlogGrid = ({ posts }) => {
  return (
    <SimpleGrid
      w="80vw"
      h="max-content"
      spacing={7}
      autoColumns
      columns={{
        base: "1",
        md: "2",
        xl: "3",
      }}
    >
      {posts.map((post, key) => {
        return <BlogCard post={post} key={key} />;
      })}
    </SimpleGrid>
  );
};

export default BlogGrid;
