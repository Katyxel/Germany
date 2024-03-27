import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../hooks/UseAuth";
import CategorySelect from "../Select/Select";

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
  const [error, setError] = useState(null); // состояние для отслеживания ошибки
  const [editingCommentId, setEditingCommentId] = useState(null); // состояние отслеживания измененного комментария
  const [editedCommentText, setEditedCommentText] = useState(""); // состояние отслеживания измененного текста в комментарии
  const [users, setUsers] = useState([]); // Массив пользователей из logins
  const [selectedCategory, setSelectedCategory] = useState(""); // состояние для отслеживания категории

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

  const handleDelete = async (commentId) => {
    try {
      await axios.delete(`http://localhost:3004/comments/${commentId}`);
      const updatedComments = comments.filter(
        (comment) => comment.id !== commentId
      );
      setComments(updatedComments);
    } catch (error) {
      console.error("Произошла ошибка при удалении комментария:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingCommentId(id);
    const commentToEdit = comments.find((comment) => comment.id === id);
    setEditedCommentText(commentToEdit.text);
    return commentToEdit; // Возвращаем объект комментария для использования в handleSaveEdit
  };

  const handleSaveEdit = async () => {
    try {
      const currentDate = new Date().toISOString();
      const user = users.find((user) => user.id === userId);
      const userName = user ? user.name : "Unknown";

      const commentToEdit = comments.find(
        (comment) => comment.id === editingCommentId
      ); // Получаем объект комментария
      await axios.put(`http://localhost:3004/comments/${editingCommentId}`, {
        text: editedCommentText,
        userId: userId,
        userName: userName,
        date: currentDate,
        category: commentToEdit.category, // Добавляем категорию в данные для обновления комментария
      });

      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? {
              ...comment,
              text: editedCommentText,
              userName: userName,
              date: currentDate,
              category: commentToEdit.category,
            }
          : comment
      );
      setComments(updatedComments);
      setEditingCommentId(null);
    } catch (error) {
      console.error("Произошла ошибка при сохранении изменений:", error);
    }
  };

  // Функция для фильтрации комментариев по выбранной категории
  const filteredComments = selectedCategory
    ? comments.filter((comment) => comment.category === selectedCategory)
    : comments;

  if (loading) {
    return <p>Загрузка комментариев...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <CategorySelect
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      />
      <h2 className="text-xl font-semibold my-6">Список комментариев</h2>
      {filteredComments.length === 0 ? (
        <p className="text-gray-600">Пока здесь нет комментариев.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {filteredComments.map((comment) => (
            <li key={comment.id} className="py-2">
              <div className="flex flex-col"> {/* Изменено на flex-col */}
                <div>
                  <p className="text-black font-medium mb-1">
                    Автор: {getUserNameById(comment.userId)}
                  </p>
                  <p className="text-gray-800 mb-1">
                    Дата: {new Date(comment.date).toLocaleDateString("ru-RU")}
                  </p>
                  <p className="text-gray-800 mb-1">
                    Категория: {comment.category}
                  </p>
                  {editingCommentId === comment.id ? (
                    <textarea
                      value={editedCommentText}
                      onChange={(e) => setEditedCommentText(e.target.value)}
                      className="border border-gray-300 rounded-md p-2 mb-2 w-full"
                    />
                  ) : (
                    <p className="text-gray-800 font-semibold mb-1">
                      {comment.text}
                    </p>
                  )}
                </div>
                {isAuthenticated && userId === comment.userId && (
                  <div className="flex"> {/* Изменено на flex */}
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
