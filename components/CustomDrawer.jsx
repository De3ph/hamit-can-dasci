import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  Button,
  Box,
  VStack,
} from "@chakra-ui/react";
import { Menu } from "@emotion-icons/evaicons-solid";
import { headerLinks } from "@exports/HeaderLinks";
import Link from "next/link";
import { colours } from "@exports/Colours";
const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <Box
      display={{
        base: "block",
        lg: "none",
      }}
    >
      <Button
        _hover={{
          color: colours.header_link_button_color,
        }}
        ref={btnRef}
        colorScheme="blackAlpha"
        onClick={onOpen}
      >
        <Menu size="24" />
      </Button>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent p={4} bg="blackAlpha.700" color="whatsapp.100">
          <DrawerCloseButton size="lg" bg="blackAlpha.300" color="white" />
          <DrawerHeader mx="auto"></DrawerHeader>

          <DrawerBody>
            <VStack gap="8">
              {headerLinks.map((link, key) => {
                return (
                  <Link key={key} href={link.href}>
                    <Button
                      onClick={onClose}
                      fontSize="lg"
                      variant="solid"
                      colorScheme="blackAlpha"
                      _hover={{
                        color: colours.header_link_button_color,
                      }}
                    >
                      {link.content}
                    </Button>
                  </Link>
                );
              })}
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
