import React, { useState } from 'react';
import axios from 'axios';
import styles from "../Modal/Modal.module.css";
import Image from 'next/image';
import close from '../../../public/images/kisspng-rectangle-symbol-cancel-button-5abbe10edafc41.305761701522262286897.jpg';
import { useAuth } from "../../hooks/UseAuth"; // Поменяли импорт

const RegistrationForm = ({ closeModal }) => {
  const { login } = useAuth(); // Используем хук useAuth
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await axios.post('http://localhost:3004/logins', { name, email, password });
      console.log("Заявка успешно отправлена");
      setSuccessMessage("Регистрация успешно выполнена!");
      setName("");
      setEmail("");
      setPassword("");
      setError("");
      setSuccessMessage("Вы зарегистрировались!");
      setTimeout(() => {
        setSuccessMessage("");
        closeModal();
        login(); // Вызываем функцию login для установки статуса аутентификации в true
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
        <form className={styles.modalForm} onSubmit={handleSubmit}>
          <input type="text" placeholder="Имя" value={name} onChange={(e) => setName(e.target.value)} required />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className={styles.modalButton}>Зарегистрироваться</button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default RegistrationForm;

