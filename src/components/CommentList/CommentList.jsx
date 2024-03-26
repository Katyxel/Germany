import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/UseAuth";

/**
 * Компонент для отображения списка комментариев.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Array} props.comments - Массив комментариев.
 * @param {Function} props.setComments - Функция для установки комментариев.
 * @param {boolean} props.isAuthenticated - Флаг аутентификации пользователя.
 * @returns {JSX.Element} Компонент для отображения списка комментариев.
 */
const CommentList = ({ comments, setComments, isAuthenticated }) => {
  const { userId } = useAuth();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");
  const [users, setUsers] = useState([]); // Массив пользователей из logins

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get("http://localhost:3004/comments");
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        setError("Произошла ошибка при загрузке комментариев");
        setLoading(false);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:3004/logins");
        setUsers(response.data);
      } catch (error) {
        console.error("Произошла ошибка при загрузке пользователей:", error);
      }
    };

    fetchComments();
    fetchUsers();
  }, [setComments]);

  const getUserNameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : "Unknown";
  };

  const handleEdit = (id) => {
    setEditingCommentId(id);
    const commentToEdit = comments.find((comment) => comment.id === id);
    setEditedCommentText(commentToEdit.text);
  };

  const handleSaveEdit = async () => {
    try {
      const currentDate = new Date().toISOString();
      const user = users.find((user) => user.id === userId);
      const userName = user ? user.name : "Unknown";
      
      await axios.put(`http://localhost:3004/comments/${editingCommentId}`, {
        text: editedCommentText,
        userId: userId,
        userName: userName, // Добавляем имя пользователя
        date: currentDate,
      });
  
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editedCommentText, userName: userName, date: currentDate }
          : comment
      );
      setComments(updatedComments);
      setEditingCommentId(null);
    } catch (error) {
      console.error("Произошла ошибка при сохранении изменений:", error);
    }
  };
  
  
  if (loading) {
    return <p>Загрузка комментариев...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Список комментариев</h2>
      {comments.length === 0 ? (
        <p className="text-gray-600">Пока здесь нет комментариев.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {comments.map((comment) => (
            <li key={comment.id} className="py-2">
              <div className="flex justify-between items-center">
                <div>
                  {editingCommentId === comment.id ? (
                    <textarea
                      value={editedCommentText}
                      onChange={(e) => setEditedCommentText(e.target.value)}
                    />
                  ) : (
                    <>
                      <p className="text-gray-800 font-semibold">
                        {comment.text}
                      </p>
                      <p className="text-gray-600">
                       Автор: {getUserNameById(comment.userId)}
                      </p>
                    </>
                  )}
                  <p className="text-gray-800">
                    {new Date(comment.date).toLocaleDateString("ru-RU")}
                  </p>
                </div>
                {isAuthenticated && userId === comment.userId && (
                  <div>
                    {editingCommentId === comment.id ? (
                      <button
                        className="bg-green-500 text-white py-1 px-2 rounded-md mr-2"
                        onClick={handleSaveEdit}
                      >
                        Сохранить
                      </button>
                    ) : (
                      <button
                        className="bg-gray-500 text-white py-1 px-2 rounded-md mr-2"
                        onClick={() => handleEdit(comment.id)}
                      >
                        Изменить
                      </button>
          )}
          <button
            className="bg-red-500 text-white py-1 px-2 rounded-md"
            onClick={() => handleDelete(comment.id)}
          >
            Удалить
          </button>
        </div>
      )}
    </div>
  </li>
))}

        </ul>
      )}
    </div>
  );
};

export default CommentList;