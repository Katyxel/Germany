import React from "react";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import { Montserrat } from "next/font/google";

// Вызываем функцию Montserrat и присваиваем результат константе
const montserratStyles = Montserrat({subsets: ['cyrillic'],  display: 'swap', weight:['400', '500', '700']});

const Home = () => (
  <>
    <Head>
      <title>My first template</title> 
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* Добавляем настройки шрифта из Montserrat */}
      {/* Передаем константу montserratStyles в шаблонную строку */}
      <style jsx global>{`${montserratStyles}`}</style>
    </Head>
    <main>
      <div>
        <Banner />
        <h1>Добро пожаловать на стартовую страницу</h1>
      </div>
    </main>
  </>
);

export default Home;
