import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import '../styles/globals.css';

/* Корневой элемент страницы */
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>My first template</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
    </>
  );
};

export default App;
