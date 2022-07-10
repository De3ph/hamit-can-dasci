import { Button, Tooltip, Box } from "@chakra-ui/react";
import React from "react";

const SocialLink = ({ platform, href, icon, key }) => {
  return (
    <Box key={key}>
      <Tooltip
        hasArrow
        placement="auto"
        label={platform}
        aria-label="A tooltip"
      >
        <Box>
          <Button
            h="fit-content"
            w="fi"
            colorScheme="messenger"
            variant="ghost"
          >
            <a href={href}>{icon}</a>
          </Button>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default SocialLink;
