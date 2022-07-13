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
} from "@chakra-ui/react";
const CustomDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer placement="top" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent p={4} bg="blackAlpha.700" color="whatsapp.100">
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>Hi</DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CustomDrawer;
