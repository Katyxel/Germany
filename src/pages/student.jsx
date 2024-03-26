import React, { useState } from "react";
import Bannerdown from "../components/Bannerdown/Bannerdown";
import Slider from "../components/Slider/Slider";
import CardsStudy from "../components/CardsStudy/CardsStudy";
import TabsStudy from "../components/TabsStudy/TabsStudy";
import AccordionProposes from "../components/AccordionProposes/AccordionProposes";
import Modal from "../components/Modal/Modal";
import { FaArrowRight } from "react-icons/fa";

const listItemStyle = {
  display: "flex",
  alignItems: "center",
};

const Student = () => {
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
    <div className="container">
      <div>
        <div className="bg-gray-800 text-white py-4 mt-6">
          <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-center">УЧЁБА В ГЕРМАНИИ</h1>
          </div>
        </div>

        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center">
            Команда LifeInGermany напрямую сотрудничает со всеми языковыми
            курсами и ВУЗами Германии, включая государственные и частные. С
            пакетом «Всё включено» мы предоставим полный цикл услуг и
            консультаций, начиная от помощи в выборе будущей профессии до
            получения приглашения.
          </p>
        </div>

        <CardsStudy />

        <div className="mx-auto text-center">
          <div className="bg-yellow-500 p-8">
            <h2 id="programmers" className="text-gray-800 text-4xl font-bold">
              ГАРАНТИЯ ПОСТУПЛЕНИЯ В ВУЗЫ
            </h2>
            <p className="text-gray-800 text-xl font-bold">
              99% наших абитуриентов получают минимум 1 приглашение. Если вы
              попали в тот 1%, который не получил приглашение, мы подадим вас на
              следующий семестр на 3 программы абсолютно бесплатно!*
              <br />
              *повторная подача не предоставляется на специальности с конкурсным
              отбором
            </p>
          </div>
        </div>

        <Bannerdown />

        <h2 className="text-5xl text-center font-bold text-gray-800 my-14">
          С Вами работают
        </h2>
        <Slider />
        <h2 className="text-5xl text-center font-bold text-gray-800 my-14">
          Сопровождение
        </h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={listItemStyle}>
            <FaArrowRight style={{ marginRight: "5px" }} /> в университет
          </li>
          <li style={listItemStyle}>
            <FaArrowRight style={{ marginRight: "5px" }} /> в Studienkolleg
          </li>
          <li style={listItemStyle}>
            <FaArrowRight style={{ marginRight: "5px" }} /> на бакалавриат
          </li>
          <li style={listItemStyle}>
            <FaArrowRight style={{ marginRight: "5px" }} /> на магистратуру
          </li>
          <li style={listItemStyle}>
            <FaArrowRight style={{ marginRight: "5px" }} /> на подготовительные
            языковые курсы при университете
          </li>
        </ul>
        <h2
          id="all"
          className="text-4xl bg-gray-800 p-8 text-center font-bold text-white my-14"
        >
          Этапы работы
        </h2>
        <h3 className="text-3xl text-center text-gray-800 my-14">
          Как мы помогаем поступить в учебные заведения в Германии
        </h3>
        <div className="container">
          <p className="relative text-2xl font-bold my-4">
            Подготовительная работа
            <span className="absolute top-0 left-0 transform -translate-x-5 -translate-y-5 text-yellow-500 mt-4">
              1
            </span>
          </p>
          <ul className="mb-4">
            <li className="list-disc">
              Проводим предварительную консультацию в чате с оценкой шансов на
              поступление в Германию
            </li>
            <li className="list-disc">
              По желанию клиента проводим полноценную платную консультацию с
              одним из наших специалистов в формате видеозвонка, если нет
              понимания процесса, остались дополнительные вопросы (по желанию
              клиента стоимость консультации можем вычесть из окончательной
              суммы)
            </li>
            <li className="list-disc">
              Фиксируем все пожелания и исходные данные клиента
            </li>
            <li className="list-disc">Заключаем договор на сопровождение</li>
            <li className="list-disc">
              Знакомимся с куратором, который будет вести сопровождение и будет
              постоянно на связи
            </li>
          </ul>

          <p className="relative text-2xl font-bold my-4">
            Процесс подготовки к поступлению
            <span className="absolute top-0 left-0 transform -translate-x-5 -translate-y-5 text-yellow-500 mt-4">
              2
            </span>
          </p>
          <ul className="mb-4">
            <li className="list-disc">
              Подбираем программы, направления, которые интересны и подходят
              клиенту по исходным требованиям
            </li>
            <li className="list-disc">
              Определяемся с итоговым перечнем программ, куда будем поступать
              (количество программ зависит от Тарифа)
            </li>
            <li className="list-disc">
              Составляем пошаговый план поступления на выбранные программы, на
              который ориентируемся в течение всей работы
            </li>
            <li className="list-disc">
              Помогаем со сбором пакетов документов для каждого учебного
              заведения (бывает, что пакеты документов варьируются), ориентируем
              клиента по вопросам переводов, заверений, апостилей и т. д., то
              есть с любым вопросом в процессе работы мы готовы помочь
            </li>
            <li className="list-disc">
              Занимаемся корректировкой резюме и мотивационного письма для
              подачи на программы, кстати, в некоторых университетах
              мотивационное письмо является важнейшим фактором, который влияет
              на положительный ответ комиссии
            </li>
            <li className="list-disc">
              Проверяем итоговые пакеты документов и готовим их к отправке
            </li>
          </ul>

          <p className="relative text-2xl font-bold">
            Подача документов и ожидание результатов поступления
            <span className="absolute top-0 left-0 transform -translate-x-5 -translate-y-5 text-yellow-500 mt-4">
              3
            </span>
          </p>
          <ul className="mt-4">
            <li className="list-disc">
              Подаем документы клиента на выбранные программы, заполняем
              формуляры, отправляем заявки
            </li>
            <li className="list-disc">Коммуницируем с учебными заведениями</li>
            <li className="list-disc">
              Ожидаем ответы, проверяем статусы в личных кабинетах клиента
            </li>
            <li className="list-disc">
              Получаем ответы, рассказываем, как будет строиться дальнейший
              процесс для клиента
            </li>
          </ul>
        </div>
        <h2 className=" bg-yellow-500 p-8 text-4xl text-center font-bold text-gray-800 my-14">
          Тарифы
        </h2>
        <h3 className="text-3xl text-center text-gray-800 my-14">
          Что входит в пакеты сопровождения
        </h3>
        <TabsStudy />

        <div className="mx-auto flex flex-col container justify-center items-center">
          <div className="bg-red-800 w-full flex justify-center items-center p-8">
            <h2 className="text-white text-2xl font-bold  text-center">
              * Вы можете расширить любой тариф и добавить любое количество
              программ. Добавление 1 программы - 150 евро.
            </h2>
          </div>
          <div className="bg-white w-full p-8">
            <p className="text-gray-800 text-xl text-center">
              При покупке любого пакета вы можете расширить его и приобрести
              отдельные услуги со скидкой 10%. * кроме консультаций со
              специалистом
            </p>
          </div>
        </div>

        <div className="w-full container flex justify-center items-center p-8 mt-5">
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
    </div>
  );
};

export default Student;
