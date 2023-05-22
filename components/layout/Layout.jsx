import { VStack } from "@chakra-ui/react"
import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <VStack
      pt="4"
      pb="2"
      color="white"
      bgImage="url(/svg/background.svg)"
      bgRepeat="no-repeat"
      bgSize="cover"
      justify="space-between"
      align="center"
      minH="100vh"
    >
      <Header />
      {children}

      <Footer />
    </VStack>
  )
}
