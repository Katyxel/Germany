import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Хук аутентификации пользователя.
 * Предоставляет функции для управления аутентификацией пользователя, входом, регистрацией и выходом.
 * @returns {Object} Объект, содержащий состояния аутентификации и функции для управления.
 */
export const useAuth = () => {
  // Состояния аутентификации, userId и загрузки
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Эффект, запускающийся при монтировании компонента.
   * Проверяет, аутентифицирован ли пользователь и устанавливает соответствующие состояния.
   */
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserId = localStorage.getItem("userId");

    // Выводим в консоль состояния для отладки
    // console.log("isLoggedIn:", isLoggedIn);
    // console.log("storedUserId:", storedUserId);

    const fetchData = async () => {
      try {
        setIsLoading(true);

        if (isLoggedIn === "true" && storedUserId) {
          setIsAuthenticated(true);

          // Получаем данные пользователя
          const response = await axios.get("http://localhost:3004/logins");
          console.log("Received response:", response);
          const userData = response.data;
          console.log("userData:", userData); // Добавленный отладочный вывод
          const user = userData.find(
            (login) => login.id === parseInt(storedUserId)
          );

          if (user) {
            console.log("User found:", user);
            setUserId(user.id);
          } else {
            console.error("Пользователь с ID", storedUserId, "не найден.");
          }
        } else {
          setIsAuthenticated(false);
          setUserId(null);
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Ошибка при получении данных о пользователях:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  /**
   * Функция для входа пользователя.
   * @param {number} id - ID пользователя.
   */
  const login = (id) => {
    setIsAuthenticated(true);
    localStorage.setItem("isLoggedIn", "true");

    // Устанавливаем ID пользователя сразу
    setUserId(id);
    localStorage.setItem("userId", id);
  };

  /**
   * Функция для регистрации пользователя.
   * @param {Object} userData - Данные пользователя для регистрации.
   * @returns {boolean} Возвращает true, если регистрация прошла успешно, иначе false.
   */
  const register = async (userData) => {
    try {
      const response = await axios.post(
        "http://localhost:3004/logins",
        userData
      );
      console.log("Registration successful:", response.data);

      // После успешной регистрации устанавливаем userId
      setUserId(response.data.id);
      localStorage.setItem("userId", response.data.id);

      // Вызываем функцию для автоматического входа после регистрации
      login(response.data.id);

      return true;
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
      return false;
    }
  };

  /**
   * Функция для выхода пользователя.
   */
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isLoggedIn");
    setUserId(null);
    localStorage.removeItem("userId");
  };

  // Возвращаем состояния аутентификации и функции для управления
  return { isAuthenticated, login, logout, register, userId, isLoading };
};
