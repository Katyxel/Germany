import React from "react";
// import Script from 'next/script';

const Footer = () => {
  return (
    <div className="container my-4">
    <footer className="bg-gray-100 my-2 text-gray-800 p-8 flex flex-col items-center">
      <div className="mb-8 text-center">
        Помощь в иммиграции в Германию и жизнь в ФРГ © 2008 - 2024 Пётр Иванов.
        При использовании любых материалов сайта, включая фотографии и тексты,
        активная ссылка на источник обязательна. Наш офис в России: Москва,
        Научный переулок, 20, подъезд 1, этаж 2, оф. 205, бизнес-центр «Филион»· +7 495 142 17 55
      </div>

      {/* <div className="mb-8 flex justify-center">
        <div className="map-container">
          <Script
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A7bbce5305b67a70c787ade7c1eead755788de0eb6b037a2e22437a2bb8a3dcac&amp;width=569&amp;height=374&amp;lang=ru_RU&amp;scroll=true"
            strategy="afterInteractive"
          />
        </div>
      </div> */}

      <div className="flex justify-center">
        <a
          href="#"
          className="text-orange-600 hover:text-blue-500 transition duration-300 mr-4"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-orange-600 hover:text-blue-500 transition duration-300 mr-4"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-orange-600 hover:text-blue-500 transition duration-300 mr-4"
        >
          Instagram
        </a>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
