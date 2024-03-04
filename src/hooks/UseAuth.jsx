// useAuth.js
import{ useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Проверяем, есть ли информация о входе в localStorage при загрузке страницы
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Функция для входа пользователя
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  // Функция для выхода пользователя
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isLoggedIn');
  };

  return { isAuthenticated, login, logout };
};
