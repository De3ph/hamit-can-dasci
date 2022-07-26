import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const BlogCard = ({ title }) => {
  return (
    <>
      <Box bgColor="black">
        <Box>
          <Heading color="white" size="md">
            {title}
          </Heading>
        </Box>
      </Box>
    </>
  );
};

export default BlogCard;
