import React, { useState } from "react";
import CardsComponent from "../components/Cards/Cards";
import Slider from "../components/Slider/Slider";
import AccordionComponent from "../components/Accordion/Accordion";
import AccordionProposes from "../components/AccordionProposes/AccordionProposes";
import Modal from "../components/Modal/Modal";

import {
  Divider,
  Box,
  AbsoluteCenter,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const WorkPage = () => {
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
          <h1 className="text-white text-4xl font-bold">РАБОТА В ГЕРМАНИИ</h1>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center">
            Вы гарантированно в разы повысите шансы на получение оффера по
            работе в немецкой компании и проще пройдёте период интеграции и
            адаптации.
          </p>
        </div>
      </div>
      {/* Вставляем компонент карточек */}
      <CardsComponent />
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
        Получить консультацию
      </button>
      <h2 className="text-5xl text-center font-bold text-gray-800 my-14">
        С Вами работают
      </h2>
      <Slider />
      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="bg-yellow-500 w-full flex justify-center items-center p-8">
          <h2 id="programmers" className="text-gray-800 text-4xl font-bold">
            РАБОТА В ГЕРМАНИИ ДЛЯ ПРОГРАММИСТОВ
          </h2>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center font-bold">
            С 2020 года для получения рабочей визы в Германии IT-специалисту
            необязательно нужно иметь высшее образование. Достаточно
            подтверждения релевантного опыта в течение 3 лет.
          </p>
        </div>
      </div>
      <AccordionComponent />
      <div className="mx-auto flex flex-col justify-center items-center mt-10">
        <div className="bg-yellow-500 w-full flex justify-center items-center p-8">
          <h2 id="packege" className="text-gray-800 text-4xl font-bold">
            ПАКЕТ УСЛУГ ДЛЯ ПЕРЕЕЗДА ПО РАБОТЕ
          </h2>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center font-bold">
            Наша команда знает о трудоустройстве в Германии всё и поможет вам
            пройти путь от поступления в ВУЗ до получения места в немецкой
            фирме.
          </p>
        </div>
      </div>
      <Box position="relative" padding="10">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          <p className="font-bold">
            Полное сопровождение поиска работы — от 300€
          </p>
        </AbsoluteCenter>
      </Box>
      <h2 className="text-gray-800 text-xl font-bold mb-5">
        Личный чат с нашим специалистом
      </h2>
      <UnorderedList>
        <ListItem>
          Для поиска работы в Германии необходимо сильное, продающее резюме. Мы
          поможем вам в его составлении, переведем на немецкий или английский,
          проведем полную коррекцию и приведем резюме в выигрышный формат.
        </ListItem>
        <ListItem>
          Чаще всего именно по сопроводительному письму HR принимает решение о
          приглашении вас на собеседование. В Германии подобным письмам придают
          большое значение! В рамках этой услуги мы распишем структуру данного
          письма и дадим советы по его написанию. Готовый текст мы
          отредактируем, отформатируем, проверим на ошибки и переведем на
          немецкий или английский.
        </ListItem>
        <ListItem>
          Подберем вакансии, подходящие под ваши критерии. Например, регион,
          должность, зарплата, жилье и т.д. От 20 до 50 вакансий, в зависимости
          от вашей специализации.
        </ListItem>
        <ListItem>
          Подготовим к собеседованию. Ура! После отклика вам назначили
          собеседование. К подготовке к собеседованию в Германии нужно отнестись
          очень внимательно. Мы расскажем вам, как строится собеседование, с чем
          нужно заранее ознакомиться. И как вообще пройти собеседование с
          немецким рекрутером? Доступ ко всем материалам будет предоставлен в
          закрытом телеграм-канале. Материалы остаются у вас навсегда.
        </ListItem>
        <br></br>
        <ListItem>
          БОНУС: когда вы получаете контракт на работу, мы помогаем вам с
          оформлением страховки в Германию абсолютно бесплатно!
        </ListItem>
      </UnorderedList>

      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="bg-gray-700 w-full flex justify-center items-center p-8 mt-10">
          <UnorderedList className="text-white text-xl font-bold">
            <ListItem>
              Нашим клиентам бесплатно оформим обязаиетльные в Германии
              медицинские страховки через государственную страховую компанию TK
            </ListItem>
            <ListItem>
              Каждый запрос на услугу рассматривается отдельно в зависимости от
              кейса.
            </ListItem>
            <ListItem>
              При оплате в рублях цены по курсу на день оплаты.
            </ListItem>
          </UnorderedList>
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="bg-yellow-500 w-full flex justify-center items-center p-8 mt-10">
          <h2 id="proposes" className="text-gray-800 text-4xl font-bold">
            ОТДЕЛЬНЫЕ УСЛУГИ
          </h2>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center font-bold">
            С 2020 года для получения рабочей визы в Германии IT-специалисту
            необязательно нужно иметь высшее образование. Достаточно
            подтверждения релевантного опыта в течение 3 лет.
          </p>
        </div>
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

export default WorkPage;
