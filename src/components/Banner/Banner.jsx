import React, { useState } from "react";
import Image from 'next/image'
import bann from '../../../public/images/germany.jpeg';
import styles from "./Banner.module.css";
import Modal from "../Modal/Modal";

const Banner = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    
    <div className={styles.banner}>
      {showModal && <Modal closeModal={closeModal} />}
     <Image src={bann} alt="Баннер" className="banner-image" priority={true} />
      <h2 className={styles["banner-text"]}>willkommen in Deutschland</h2>
      <p className={styles["banner-list"]}>Помогаем переехать по работе, учёбе, для изучения немецкого, по воссоединению семьи.</p>
        <ul className={styles["banner-descr"]}>
          <li>Консультации до, вовремя и после переезда</li>
          <li>Реалистичная оценка шансов</li>
          <li>Помощь в сборе документов</li>
          <li>Оформление визы, ВНЖ, ПМЖ</li>
          <li>Языковая поддержка</li>
        </ul>
        <button className={styles["apply-button"]} onClick={openModal}>Подать заявку</button>
    </div>
  );
};


export default Banner;