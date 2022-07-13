import { Box, Button, HStack, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { colours } from "@exports/Colours";
import { headerLinks } from "@exports/HeaderLinks";

const Header = () => {
  return (
    <Box
      display={{
        base: "none",
        lg: "block",
      }}
      p="8"
      pos="absolute"
      top={4}
      w="80vw"
    >
      <Box textColor={colours.linkColor}>
        <HStack>
          <Flex gap="5" justify="space-around" w="100%">
            {headerLinks.map((link, key) => {
              return (
                <Link href={link.href}>
                  <Button
                    fontSize="2xl"
                    key={key}
                    _hover={{
                      color: colours.header_link_button_hover_color,
                    }}
                    color={colours.header_link_button_color}
                    variant="link"
                  >
                    {link.content}
                  </Button>
                </Link>
              );
            })}
          </Flex>
          <Box></Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
