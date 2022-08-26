import "@styles/globals.css";
import Layout from "../components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head"

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS>
      <Layout>
        <Head>
          <title>Hamit Can - De3ph</title>
          <meta
            name="description"
            content="Portfolio website of Hamit Can DAŞÇİ"
          ></meta>
          <meta name="author" content="Hamit Can DAŞÇİ" />
          <meta charset="UTF-8"></meta>
          <link rel="icon" href="/static/favicon.ico" />

          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="public/static/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="public/static/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="public/static/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="public/static/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="public/static/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="public/static/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="public/static/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="public/static/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="public/static/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="public/static/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="public/static/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="public/static/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="public/static/favicon-16x16.png"
          />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#000000"></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default Application;
