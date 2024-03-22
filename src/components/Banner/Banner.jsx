import React, { useState } from "react";
import Image from "next/image";
import bann from "../../../public/images/germany.jpeg";
import styles from "./Banner.module.css";
import Modal from "../Modal/Modal";

/**
 * Компонент баннера, который отображает основную информацию.
 * @component
 */

// Состояние для отображения модального окна
const Banner = () => {
  const [IsShowModal, setShowModal] = useState(false);

  //Функция для открытия модального окна.

  const openModal = () => {
    setShowModal(true);
  };

  // Функция для закрытия модального окна.
 
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.banner}>
      {IsShowModal && <Modal closeModal={closeModal} />}
      <Image src={bann} alt="Баннер" className="banner-image" priority={true} />
      <h2 className={styles["banner-text"]}>willkommen in Deutschland</h2>
      <p className={styles["banner-list"]}>
        Помогаем переехать по работе, учёбе, для изучения немецкого, по
        воссоединению семьи.
      </p>
      <ul className={styles["banner-descr"]}>
        <li>Консультации до, вовремя и после переезда</li>
        <li>Реалистичная оценка шансов</li>
        <li>Помощь в сборе документов</li>
        <li>Оформление визы, ВНЖ, ПМЖ</li>
        <li>Языковая поддержка</li>
      </ul>
      <button className={styles["apply-button"]} onClick={openModal}>
        Подать заявку
      </button>
    </div>
  );
};

export default Banner;
