import style from "@styles/Layout.module.css";
import { VStack } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <VStack
      color="white"
      h="100vh"
      className={style.layout}
      justify="center"
      align="center"
    >
      {children}
    </VStack>
  );
}
