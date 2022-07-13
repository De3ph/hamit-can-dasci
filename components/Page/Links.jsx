import { Box, Divider, Stack, StackDivider } from "@chakra-ui/react";
import React from "react";
import { socialLinks } from "@exports/SocialLinks";
import SocialLink from "../SocialLink";

const Links = () => {
  return (
    <>
      <Box>
        <Stack
          divider={<StackDivider />}
          direction={{
            base: "column",
            lg: "row",
          }}
          gap="2"
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
