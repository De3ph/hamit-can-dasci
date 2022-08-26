import style from "@styles/Layout.module.css";
import { VStack } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <VStack
      pt="4"
      pb="2"
      color="white"
      className={style.layout}
      justify="space-between"
      align="center"
      minH="100vh"
    >
      <Header />
      {/* <CustomDrawer /> */}
      {children}

      <Footer />
    </VStack>
  )
}
