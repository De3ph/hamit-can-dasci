import style from "@styles/Layout.module.css";
import { VStack } from "@chakra-ui/react";

export default function Layout({ children }) {

  return (
    <VStack
      pt="8"
      color="white"
      className={style.layout}
      justify="center"
      align="center"
      minH="100vh"
    >
      {children}
    </VStack>
  );
}
