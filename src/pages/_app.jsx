import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import { ChakraProvider } from '@chakra-ui/react'
import { Montserrat } from "next/font/google";
import '../styles/globals.css';

const montserratStyles = Montserrat({
  subsets: ["cyrillic"],
  weight: ["400", "500", "700"],
});

const App = ({ Component, pageProps }) => {
  return (
    <>
      <ChakraProvider>
        <Head>
          <title>LifeInGermany</title>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style jsx global>{`
            /* Добавляем шрифт Montserrat напрямую к заголовку */
            .font-montserrat {
              font-family: "Montserrat", sans-serif;
            }
          `}</style>
        </Head>
        <main className={montserratStyles.className}>
          <Navigation />
          <Component {...pageProps} />
          <Footer />
        </main>
      </ChakraProvider>
    </>
  );
};

export default App;
