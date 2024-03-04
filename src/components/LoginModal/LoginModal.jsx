import React, { useState } from 'react';
import axios from 'axios';
import styles from "../Modal/Modal.module.css";
import Image from 'next/image';
import close from '../../../public/images/kisspng-rectangle-symbol-cancel-button-5abbe10edafc41.305761701522262286897.jpg';
import { useAuth } from "../../hooks/UseAuth"; // Поменяли импорт

const LoginModal = ({ closeModal }) => {
  const { login } = useAuth(); // Используем хук useAuth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoginDisabled, setIsLoginDisabled] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const checkUserExists = async (email) => {
      try {
        const response = await axios.get(`http://localhost:3004/logins?email=${email}`);
        return response.data.length > 0;
      } catch (error) {
        console.error("Ошибка при проверке пользователя:", error);
        return false;
      }
    };

    const handleLoginSuccess = () => {
      // Устанавливаем состояние аутентификации
      login();
      // Закрываем модальное окно через 3 секунды
      setTimeout(() => {
        closeModal();
      }, 3000);
    };
  
    try {
      const userExists = await checkUserExists(email);
  
      if (userExists) {
        setSuccessMessage("Вход успешно выполнен!");
        // Вызываем функцию для установки состояния аутентификации и закрываем модальное окно
        handleLoginSuccess();
      } else {
        setError("Пользователь с таким email не найден. Пожалуйста, зарегистрируйтесь!");
        setIsLoginDisabled(true);
      }
    } catch (error) { 
      setError("Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.");
      console.error("Ошибка при входе:", error);
    }
    setLoading(false);
  
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
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" disabled={isLoginDisabled} className={isLoginDisabled ? `${styles.disabledButton} ${styles.loginButton}` : `${styles.loginButton}`}>
              {loading ? "Загрузка..." : "Войти"}
            </button>
          </form>
        {error && <p className={styles.error}>{error}</p>}
        {successMessage && <p className={styles.success}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default LoginModal;
