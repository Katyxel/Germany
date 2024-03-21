import React, { useState } from "react";
import Bannerdown from "../components/BannerDown/BannerDown";
import Slider from "../components/Slider/Slider";
import CardsVisa from "../components/CardsVisa/CardsVisa";
import AccordionProposes from "../components/AccordionProposes/AccordionProposes";
import Modal from "../components/Modal/Modal";
import { FaArrowRight } from "react-icons/fa";

import { Divider, Box, AbsoluteCenter } from "@chakra-ui/react";

const listItemStyle = {
  display: "flex",
  alignItems: "center",
};

const VisaPage = () => {
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
            СОПРОВОЖДЕНИЕ ПОДАЧИ НА НАЦИОНАЛЬНУЮ ВИЗУ
          </h1>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center">
            Поможем с подготовкой документов, составим выигрышное мотивационное
            письмо, резюме по стандартам посольства и подготовим к интервью так,
            чтобы максимально снизить риски отказа.
          </p>
        </div>
      </div>

      <CardsVisa />

      <div className="mx-auto text-center">
        <div className="bg-yellow-500 p-8">
          <h2 id="programmers" className="text-gray-800 text-2xl font-bold">
            Работодатель готов перенять расходы на вашу релокацию? Мы выставим
            счёт в Германии.
          </h2>
        </div>
      </div>
      <h2 className="text-5xl text-center font-bold text-gray-800 my-14">
        С Вами работают
      </h2>
      <Slider />

      <Bannerdown />

      <h2 id="all" className="text-3xl text-center font-bold text-gray-800 my-14">
        Сопровождение получения национальной визы D при переезде в Германию:
      </h2>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        <li style={listItemStyle}>
          <FaArrowRight style={{ marginRight: "5px" }} /> по работе
        </li>
        <li style={listItemStyle}>
          <FaArrowRight style={{ marginRight: "5px" }} /> для учёбы в
          университете
        </li>
        <li style={listItemStyle}>
          <FaArrowRight style={{ marginRight: "5px" }} /> для обучения на
          языковых курсах
        </li>
        <li style={listItemStyle}>
          <FaArrowRight style={{ marginRight: "5px" }} /> по воссоединению
        </li>
      </ul>
      <h2 className="text-3xl bg-gray-800 p-8 text-center font-bold text-white my-8">
        Как мы помогаем получить визу в Германию
      </h2>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          <p className="font-bold text-red-800">
            Полное сопровождение в получении любой визы — от 390€
          </p>
        </AbsoluteCenter>
      </Box>

      <div className="my-4">
        <p className="relative text-xl font-bold my-4">
          Трудовая виза / голубая карта / виза айтишников / виза научных
          сотрудников / виза для поиска работы и признания образования / виза
          невесты
        </p>
        <ul className="mb-4">
          <li className="list-disc">
            адаптируем документы в сложных случаях (например, расхождение
            образования и рода деятельности)
          </li>
          <li className="list-disc">сопроводим процесс сбора документов</li>
          <li className="list-disc">заполним визовый формуляр</li>
          <li className="list-disc">
            подготовим биографию по стандартам посольства на немецком языке
          </li>
          <li className="list-disc">
            поможем составить, скорректируем и переведем на немецкий
            мотивационное письмо
          </li>
          <li className="list-disc">
            подготовим подтверждение диплома из Anabin
          </li>
          <li className="list-disc">
            при необходимости сопроводим подтверждение диплома в органе
            признания в Германии (в ZAB)
          </li>
          <li className="list-disc">
            откроем въездную страховку (Incoming Versicherung) и блокированный
            счет (если необходимо)
          </li>
          <li className="list-disc">
            проверим формуляр от работодателя на правильность заполнения
          </li>
          <li className="list-disc">подготовим вас к интервью в посольстве</li>
        </ul>

        <p className="relative text-xl font-bold my-4">
          Виза для работы по свободным профессиям (фриланс)
        </p>
        <ul className="my-4">
          <li className="list-disc">
            адаптируем документы в сложных случаях (например, расхождение
            образования и рода деятельности)
          </li>
          <li className="list-disc">сопроводим процесс сбора документов</li>
          <li className="list-disc">заполним визовый формуляр</li>
          <li className="list-disc">
            подготовим биографию по стандартам посольства на немецком языке
          </li>
          <li className="list-disc">
            дадим план и поможем в написании расширенного мотивационного письма
            (структурированное и детализированное описание ваших планов в
            Германии)
          </li>
          <li className="list-disc">
            дадим структуру и поможем с написанием финансового плана
          </li>
          <li className="list-disc">
            подготовим подтверждение диплома из Anabin
          </li>
          <li className="list-disc">
            откроем въездную страховку (Incoming Versicherung)
          </li>
          <li className="list-disc">подготовим вас к интервью в посольстве</li>
        </ul>

        <p className="relative text-xl font-bold">
          Студенческая / языковая / волонтёрская виза
        </p>
        <ul className="mt-4">
          <li className="list-disc">сопроводим процесс сбора документов</li>
          <li className="list-disc">заполним визовый формуляр</li>
          <li className="list-disc">
            подготовим биографию по стандартам посольства на немецком языке
          </li>
          <li className="list-disc">
            поможем составить, скорректируем и переведем на немецкий
            мотивационное письмо
          </li>
          <li className="list-disc">откроем блокированный счет</li>
          <li className="list-disc">
            откроем въездную страховку (Incoming Versicherung)
          </li>
          <li className="list-disc">проверим готовый пакет документов</li>
          <li className="list-disc">подготовим вас к интервью в посольстве</li>
          <li className="list-disc">будем на связи 6 дней в неделю</li>
        </ul>
      </div>
      <div className="my-4 flex flex-col justify-center items-center">
        <div className="bg-yellow-500 w-full flex justify-center items-center p-8">
          <h2 className="text-gray-800 text-2xl font-bold  text-center">
            При покупке двух виз: основная + воссоединение, виза воссоединения
            ВСЕГО за €190.
          </h2>
        </div>
      </div>

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

export default VisaPage;
