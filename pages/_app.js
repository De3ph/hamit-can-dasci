import "@styles/globals.css";
import Layout from "../components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Component {...pageProps}></Component>
      </Layout>
    </ChakraProvider>
  );
}

export default Application;
