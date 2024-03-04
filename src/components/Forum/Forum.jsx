import React, { useState, useEffect } from 'react';
import CommentList from '../CommentList/CommentList';
import CommentInput from '../CommentInput/CommentInput'; // Импортируем компонент ввода комментария
import axios from 'axios';
import { useAuth } from '../../hooks/UseAuth'; // Импортируем хук аутентификации

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { isAuthenticated, logout } = useAuth(); // Получаем статус аутентификации и функцию выхода

  // Эффект для загрузки комментариев при монтировании компонента
  useEffect(() => {
    fetchComments();
  }, []);

  // Функция для загрузки комментариев из сервера
  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3004/comments');
      setComments(response.data);
    } catch (error) {
      setError("Произошла ошибка при загрузке комментариев");
    }
  };

  // Функция для добавления комментария
  const addComment = async (text) => {
    try {
      const newComment = {
        text,
        date: new Date().toISOString()
      };
      await axios.post('http://localhost:3004/comments', newComment);
      // Обновляем состояние комментариев после добавления нового комментария
      setComments([...comments, newComment]);
    } catch (error) {
      setError("Произошла ошибка при добавлении комментария");
    }
  };

return (
  <div>
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">My Forum</h1>
      </div>
    </header>
    <main>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold my-4">Комментарии и вопросы об иммиграции в Германию</h1>
        <div className="flex">
          <div className="main-content">
          <CommentList comments={comments} setComments={setComments} />
          {isAuthenticated && (
        <div>
          <CommentInput addComment={addComment} />
          <button onClick={logout}>Log Out</button>
        </div>
      )}
            {error && <p className="text-red-500">{error}</p>}
           
          </div>
        </div>
      </div>
    </main>

  </div>
);
};

export default Forum;