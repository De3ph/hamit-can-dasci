import { Box, Button, HStack, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { colours } from "@exports/Colours";
import { headerLinks } from "@exports/HeaderLinks";
import CustomDrawer from "./CustomDrawer"

const Header = () => {
  return (
    <>
      <CustomDrawer />
      <Box
        display={{
          base: "none",
          md: "block"
        }}
        p="8"
        w="80vw"
      >
        <Box textColor={colours.linkColor}>
          <HStack>
            <Flex gap="5" justify="space-around" w="100%">
              {headerLinks.map((link, key) => {
                return (
                  <Link key={key} href={link.href}>
                    <Button
                      fontSize="2xl"
                      _hover={{
                        color: colours.header_link_button_hover_color
                      }}
                      color={colours.header_link_button_color}
                      variant="link"
                    >
                      {link.content}
                    </Button>
                  </Link>
                )
              })}
            </Flex>
            <Box></Box>
          </HStack>
        </Box>
      </Box>
    </>
  )
}

export default Header;
