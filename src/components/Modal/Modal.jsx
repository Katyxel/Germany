import React, { useState } from "react";
import axios from 'axios';
import styles from "./Modal.module.css";
import Image from 'next/image';
import close from '../../../public/images/kisspng-rectangle-symbol-cancel-button-5abbe10edafc41.305761701522262286897.jpg';

/**
 * Компонент модального окна для отправки заявки.
 * 
 * @component
 * @param {Function} closeModal - Функция для закрытия модального окна
 */
const Modal = ({ closeModal }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Обработчик отправки формы заявки.
   * Проверяет корректность заполнения полей формы и отправляет данные на сервер.
   * @param {Event} e - Событие отправки формы
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Проверка корректности имени
    if (!name.match(/^[A-Za-zА-Яа-яЁё]+$/)) {
      setError("Пожалуйста, введите корректное имя");
      return;
    }
    // Проверка корректности номера телефона
    if (!phone.match(/^\d{10}$/)) {
      setError("Пожалуйста, введите корректный номер телефона без +7, в формате 9050000000");
      return;
    }
    // Проверка корректности email
    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[\w-]{1,}$/)) {
      setError("Пожалуйста, введите корректный email");
      return;
    }
    
    try {
      // Отправка данных на сервер
      await axios.post('http://localhost:3004/applications', { name, phone, email });
      console.log("Заявка успешно отправлена");
      // Очистка полей формы и сообщения об ошибке
      setName("");
      setPhone("");
      setEmail("");
      setError("");
      // Отображение сообщения об успешной отправке
      setSuccessMessage("Заявка успешно отправлена!");
      // Закрытие модального окна через 3 секунды
      setTimeout(() => {
        setSuccessMessage("");
        closeModal();
      }, 3000);
    } catch (error) {
      console.error("Ошибка при отправке заявки:", error);
      setError("Произошла ошибка при отправке заявки");
    }
  };

  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={closeModal}>
          <Image
            src={close}
            alt="Close"
            width={24}
            height={24}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="tel" placeholder="Телефон без +7" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <button type="submit">Отправить заявку</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default Modal;
