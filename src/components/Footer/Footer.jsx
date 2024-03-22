import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`bg-gray-100 text-gray-800 p-8 ${styles.footer}`}>
      <div className="flex flex-wrap justify-around container">
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Колонка 1</h2>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 transition duration-300 block mb-1"
          >
            Ссылка 1
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 transition duration-300 block mb-1"
          >
            Ссылка 2
          </a>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Колонка 2</h2>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 transition duration-300 block mb-1"
          >
            Ссылка 1
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 transition duration-300 block mb-1"
          >
            Ссылка 2
          </a>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Колонка 3</h2>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 transition duration-300 block mb-1"
          >
            Ссылка 1
          </a>
          <a
            href="#"
            className="text-gray-800 hover:text-blue-500 transition duration-300 block mb-1"
          >
            Ссылка 2
          </a>
        </div>
      </div>

      {/* Ссылки на социальные сети */}
      <div className="mt-10 flex justify-center">
        <a
          href="#"
          className="text-orange-600 hover:text-blue-500 transition duration-300 mr-12"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-orange-600 hover:text-blue-500 transition duration-300 mr-12"
        >
          Twitter
        </a>
        <a
          href="#"
          className="text-orange-600 hover:text-blue-500 transition duration-300 mr-12"
        >
          Instagram
        </a>
      </div>
    </footer>
  );
};

export default Footer;
