import React, { useState } from "react";
import TabsCourses from "../components/TabsCourses/TabsCourses";
import Bannerdown from "../components/BannerDown/BannerDown";
import Modal from "../components/Modal/Modal";
import Slider from "../components/Slider/Slider";
import AccordionProposes from "../components/AccordionProposes/AccordionProposes";

const Courses = () => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Функция для открытия модального окна.
   */
  const openModal = () => {
    setShowModal(true);
  };

  /**
   * Функция для закрытия модального окна.
   */
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="py-10 container">
      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="bg-gray-800 w-full flex justify-center items-center p-8">
          <h1 className="text-white text-4xl font-bold">
            ЧАСТНЫЕ ЯЗЫКОВЫЕ ШКОЛЫ-ПАРТНЕРЫ
          </h1>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center">
            LifeInGermany напрямую сотрудничает с языковыми школами Германии. Мы
            поможем вам подобрать школу, собрать необходимые документы, подать
            заявку на курс и получить визу.
          </p>
        </div>
      </div>

      <div className="mt-4 mb-8 text-center">
        <div className="bg-yellow-500 p-8">
          <h2 id="programmers" className="text-gray-800 text-3xl font-bold">
            Регистрация в языковые школы-партнеры через нас происходит
            БЕСПЛАТНО!
          </h2>
        </div>
      </div>
      <TabsCourses />
      <button
        className="mx-auto flex flex-col justify-center items-center
    bg-gray-800 text-white py-4 px-4 rounded-lg cursor-pointer text-2xl font-bold hover:bg-yellow-500"
        onClick={openModal}
        style={{
          marginBottom: "20px",
          marginTop: "20px",
          width: "auto",
          height: "auto",
        }}
      >
        Подать заявку
      </button>
      <Bannerdown />
      <h2 className="text-5xl text-center font-bold text-gray-800 my-14">
        С Вами работают
      </h2>
      <Slider />
      <div className="w-full flex justify-center items-center p-8 mt-5">
        <h2 id="proposes" className="text-gray-800 text-4xl font-bold">
          ОТДЕЛЬНЫЕ УСЛУГИ
        </h2>
      </div>
      <AccordionProposes />
      {/* Отображение модального окна при условии, что showModal === true */}
      {showModal && <Modal closeModal={closeModal} />}
      {/* Кнопка для открытия модального окна */}
      <div className="relative mb-8">
        <button
          className="mx-auto flex flex-col justify-center items-center
    bg-gray-800 text-white py-4 px-4 rounded-lg cursor-pointer text-4xl font-bold bottom-8 hover:bg-yellow-500"
          onClick={openModal}
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            width: "auto",
            height: "auto",
          }}
        >
          Заказать услуги
        </button>
      </div>
    </div>
  );
};

export default Courses;
