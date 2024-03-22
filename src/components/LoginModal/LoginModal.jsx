import React, { useState } from "react";
import axios from "axios";
import styles from "../Modal/Modal.module.css";
import Image from "next/image";
import close from "../../../public/images/cross-small-svgrepo-com.svg";
import { useAuth } from "../../hooks/UseAuth";

/**
 * Компонент модального окна для входа.
 * @param {Object} props - Свойства компонента.
 * @param {Function} props.closeModal - Функция для закрытия модального окна.
 * @returns {JSX.Element} Элемент модального окна для входа.
 */

const LoginModal = ({ closeModal }) => {
  const { login } = useAuth(); // Используем хук useAuth для доступа к состоянию авторизации
  const [email, setEmail] = useState("");  // Состояние для поля email
  const [password, setPassword] = useState(""); // Состояние для поля password
  const [error, setError] = useState("");  // Состояние для отображения ошибок
  const [successMessage, setSuccessMessage] = useState(""); // Состояние для отображения сообщения об успешном входе
  const [loading, setLoading] = useState(false); // Состояние для отображения состояния загрузки
  const [isLoginDisabled, setIsLoginDisabled] = useState(false); // Состояние для блокировки кнопки входа во время загрузки

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const checkUserExists = async (email) => {
      try {
        const response = await axios.get(
          `http://localhost:3004/logins?email=${email}`
        );
        return response.data.length > 0;
      } catch (error) {
        console.error("Ошибка при проверке пользователя:", error);
        return false;
      }
    };

    try {
      const userExists = await checkUserExists(email);

      if (userExists) {
        setSuccessMessage("Вход успешно выполнен!");
        // Получаем пользователя с помощью запроса и передаем его id в функцию handleLoginSuccess
        const response = await axios.get(
          `http://localhost:3004/logins?email=${email}`
        );
        const user = response.data[0];
        handleLoginSuccess(user.id);
      } else {
        setError(
          "Пользователь с таким email не найден. Пожалуйста, зарегистрируйтесь!"
        );
        setIsLoginDisabled(true);
      }
    } catch (error) {
      setError("Произошла ошибка при входе. Пожалуйста, попробуйте еще раз.");
      console.error("Ошибка при входе:", error);
    }
    setLoading(false);
  };

  const handleLoginSuccess = (userId) => {
    // Устанавливаем состояние аутентификации и userId
    login(userId);
    // Закрываем модальное окно через 3 секунды
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  return (
    <div className={styles.modalBackdrop} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeButton} onClick={closeModal}>
          <Image src={close} alt="Close" width={24} height={24} />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={isLoginDisabled}
            className={
              isLoginDisabled
                ? `${styles.disabledButton} ${styles.loginButton}`
                : `${styles.loginButton}`
            }
          >
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
