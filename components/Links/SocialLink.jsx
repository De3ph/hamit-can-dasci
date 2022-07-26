import { Button, Tooltip, Box } from "@chakra-ui/react";
import React from "react";
import { colours } from "@exports/Colours";


const SocialLink = ({ platform, href, icon, key }) => {
  return (
    <Box role="social-icon" key={key}>
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
            color={colours.social_link_color}
            variant="ghost"
            _hover={{
              backgroundColor: colours.social_link_hover_backgroundColor,
              color: colours.social_link_hover_color,
            }}
          >
            <a target="_blank" rel="noreferrer" href={href}>
              {icon}
            </a>
          </Button>
        </Box>
      </Tooltip>
    </Box>
  );
};

export default SocialLink;