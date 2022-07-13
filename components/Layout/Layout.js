import style from "@styles/Layout.module.css";
import { VStack } from "@chakra-ui/react";
import Header from "./Header";
import CustomDrawer from "@components/CustomDrawer";

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
      <CustomDrawer />
      {children}
    </VStack>
  );
}
