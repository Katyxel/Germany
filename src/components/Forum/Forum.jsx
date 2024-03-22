import React, { useState, useEffect } from 'react';
import CommentList from '../CommentList/CommentList';
import CommentInput from '../CommentInput/CommentInput';
import axios from 'axios';
import { useAuth } from '../../hooks/UseAuth';

/**
 * Компонент для отображения форума с комментариями и возможностью добавления новых комментариев.
 * 
 * @returns {JSX.Element} Компонент для отображения форума.
 */
const Forum = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { isAuthenticated, logout, userId } = useAuth(); // Получаем userId из хука useAuth
  const [newCommentId, setNewCommentId] = useState(null); // Определяем newCommentId и функцию setNewCommentId

  /**
   * Обработчик выхода пользователя из системы.
   */
  const handleLogout = () => {
    logout(); // Вызываем функцию logout
  };

  /**
   * Функция для добавления нового комментария.
   * 
   * @param {string} text - Текст нового комментария.
   */
  const addComment = async (text) => { // Убираем параметр userId из addComment
    try {
      // Создаем новый комментарий
      const newComment = {
        text,
        date: new Date().toISOString(),
        userId: userId // Используем userId для создания комментария
      };

      // Отправляем новый комментарий на сервер
      const response = await axios.post('http://localhost:3004/comments', newComment);

      // Обновляем состояние комментариев
      setComments([...comments, response.data]);

      // Устанавливаем новый ID комментария
      setNewCommentId(response.data.id);
    } catch (error) {
      console.error("Произошла ошибка при добавлении комментария:", error);
      setError("Произошла ошибка при добавлении комментария");
    }
  };
  
  return (
    <div>
      <header className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center">ФОРУМ</h1>
        </div>
      </header>
      <main>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold my-4 text-center">Комментарии и вопросы об иммиграции в Германию</h1>
          <div className="flex">
            <div className="main-content">
              <CommentList comments={comments} setComments={setComments} isAuthenticated={isAuthenticated} />
              {isAuthenticated ? (
                <div>
                  <CommentInput addComment={(text) => addComment(text, userId)} setNewCommentId={setNewCommentId} />
                  <button 
  onClick={handleLogout} 
  className="bg-red-800 hover:bg-gray-500 text-white py-1 px-2 rounded-md"
>
 Выйти
</button>
                </div>
              ) : (
                <div>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Forum;
