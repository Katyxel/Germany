import React from "react";
import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Bannerdown from "../components/Bannerdown/Bannerdown";
import { Montserrat } from "next/font/google";
import Slider from "../components/Slider/Slider";
import Table from "../components/Table/Table";

// Вызываем функцию Montserrat и присваиваем результат константе
const montserratStyles = Montserrat({
  subsets: ["cyrillic"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const Home = () => (
  <>
    <Head>
      <title>LifeInGermany</title>
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <main>
      <div>
        <Banner />
        <h2 className="text-5xl text-center font-bold text-gray-800 my-14">
          Почему мы
        </h2>
        <Table />
        <h1 className="text-5xl text-center font-bold text-gray-800 my-14">
          С Вами работают
        </h1>
        <Slider />
        <Bannerdown />
      </div>
    </main>
    <style jsx global>{`
      @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");
      /* Добавляем шрифт Montserrat напрямую к заголовку */
      .font-montserrat {
        font-family: "Montserrat", sans-serif;
      }
    `}</style>
  </>
);

export default Home;
