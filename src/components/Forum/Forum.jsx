import React, { useState, useEffect } from "react";
import CommentList from "../CommentList/CommentList";
import CommentInput from "../CommentInput/CommentInput";
import axios from "axios";
import { useAuth } from "../../hooks/UseAuth";

const Forum = () => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);
  const { isAuthenticated, logout, userId } = useAuth();
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
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз

  const handleLogout = () => {
    logout();
  };

  const addComment = async (text) => {
    try {
      const user = users.find((user) => user.id === userId); // Используем полученный список пользователей
      const userName = user ? user.name : "Unknown";
  
      const newComment = {
        text,
        date: new Date().toISOString(),
        userId: userId,
        userName: userName
      };
  
      const response = await axios.post(
        "http://localhost:3004/comments",
        newComment
      );
  
      setComments([...comments, response.data]);
  
      setNewCommentId(response.data.id);
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
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold my-4 text-center">
            Комментарии и вопросы об иммиграции в Германию
          </h1>
          <div className="flex">
            <div className="main-content">
              <CommentList
                comments={comments}
                setComments={setComments}
                isAuthenticated={isAuthenticated}
              />
              {isAuthenticated ? (
                <div>
                  <CommentInput
                    addComment={(text) => addComment(text, userId)}
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
      </main>
    </div>
  );
};

export default Forum;
