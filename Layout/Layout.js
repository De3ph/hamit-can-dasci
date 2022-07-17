import style from "@styles/Layout.module.css";
import { VStack } from "@chakra-ui/react";
import Header from "./Header";
import CustomDrawer from "./CustomDrawer";

export default function Layout({ children }) {
  return (
    <VStack
      py="8"
      color="white"
      className={style.layout}
      justify="center"
      align="center"
      minH="100vh"
    >
      <Header />
      <CustomDrawer />
      {children}
    </VStack>
  );
}
