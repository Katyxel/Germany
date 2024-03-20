import React, { useState } from 'react';
import styles from "../Modal/Modal.module.css";
import Image from 'next/image';
import close from '../../../public/images/cross-small-svgrepo-com.svg';
import { useAuth } from "../../hooks/UseAuth"; // Поменяли импорт

/**
 * Компонент формы регистрации пользователя.
 * 
 * @param {function} closeModal - Функция для закрытия модального окна.
 * @returns {JSX.Element} Компонент формы регистрации пользователя.
 */
const RegistrationForm = ({ closeModal }) => {
  const { register } = useAuth(); // Используем хук useAuth для регистрации
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  /**
   * Обработчик отправки формы регистрации.
   * 
   * @param {Event} e - Событие отправки формы.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Вызываем функцию register для регистрации пользователя
      const success = await register({ name, email, password });
      if (success) {
        console.log("Регистрация успешно выполнена");
        setSuccessMessage("Регистрация успешно выполнена!");
        setName("");
        setEmail("");
        setPassword("");
        setError("");
        setSuccessMessage("Вы зарегистрировались!");
        setTimeout(() => {
          setSuccessMessage("");
          closeModal();
        }, 3000);
      } else {
        setError("Произошла ошибка при регистрации");
      }

    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      setError("Произошла ошибка при регистрации");
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
