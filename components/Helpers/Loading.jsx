import { Flex, Heading, Spinner, Box } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Flex
      direction="column"
      gap="4"
      w="100vw"
      h="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
      <Box>
        <Heading>Loading...</Heading>
      </Box>
    </Flex>
  );
};

export default Loading;
