import React, { useState, useEffect } from "react";
import CommentList from "../CommentList/CommentList";
import CommentInput from "../CommentInput/CommentInput";
import axios from "axios";
import { useAuth } from "../../hooks/UseAuth";

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null); // состояние для ошибки
  const { isAuthenticated, logout, userId } = useAuth(); // состояние для отслеживания аутентификации
  const [newCommentId, setNewCommentId] = useState(null);
  const [users, setUsers] = useState([]); // Добавляем состояние для хранения списка пользователей

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3004/logins");
        setUsers(response.data);
      } catch (error) {
        console.error("Произошла ошибка при загрузке пользователей:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleLogout = () => {
    logout();
  };

  const addComment = async (text, category) => {
    // Добавляем параметр category в функцию добавления комментария
    try {
      const user = users.find((user) => user.id === userId);
      const userName = user ? user.name : "Unknown";

      const newComment = {
        text,
        date: new Date().toISOString(),
        userId: userId,
        userName: userName,
        category: category, // Сохраняем выбранную категорию в комментарии
      };

      const response = await axios.post(
        "http://localhost:3004/comments",
        newComment
      );

      setComments([...comments, response.data]);

      setNewCommentId(response.data.id);
      return response.data; // Возвращаем добавленный комментарий
    } catch (error) {
      console.error("Произошла ошибка при добавлении комментария:", error);
      setError("Произошла ошибка при добавлении комментария");
    }
  };

  return (
    <div>
      <div className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center">ФОРУМ</h1>
        </div>
      </div>
      <main>
        <div className="container">
          <h2 className="text-3xl font-bold my-4 text-center">
            Комментарии и вопросы об иммиграции в Германию
          </h2>
          <div className="flex justify-center">
            <div className="w-full max-w-6xl">
              <div className="main-content">
                <CommentList
                  comments={comments}
                  setComments={setComments}
                  isAuthenticated={isAuthenticated}
                />
                {isAuthenticated ? (
                  <div>
                    <CommentInput
                      addComment={(text, category) =>
                        addComment(text, category)
                      } // Передаем категорию в функцию добавления комментария
                      setNewCommentId={setNewCommentId}
                    />
                    <button
                      onClick={handleLogout}
                      className="bg-red-800 hover:bg-gray-500 text-white py-1 px-2 rounded-md"
                    >
                      Выйти
                    </button>
                  </div>
                ) : (
                  <div>{error && <p className="text-red-500">{error}</p>}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forum;
