import "@styles/globals.css";
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";

import { useState } from "react";
import Layout from "@components/Layout";

function Application({ Component, pageProps }) {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default Application;
