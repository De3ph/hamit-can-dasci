import style from "@styles/Layout.module.css";
import { VStack } from "@chakra-ui/react";
import Header from "./Header";

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
      <Header />
      {children}
    </VStack>
  );
}
