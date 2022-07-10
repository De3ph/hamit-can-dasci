import { Box, Divider, Stack } from "@chakra-ui/react";
import React from "react";
import { colours } from "@exports/Colours";
import { socialLinks } from "@exports/SocialLinks";
import SocialLink from "../SocialLink";

const Links = () => {
  return (
    <>
      <Box>
        <Stack
          direction={{
            base: "column",
            lg: "row",
          }}
        >
          {socialLinks.map((item, key) => {
            return (
              <SocialLink
                platform={item.platform}
                href={item.href}
                icon={item.icon}
                key={key}
              />
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Links;
