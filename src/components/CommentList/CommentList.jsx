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
  const [error, setError] = useState(null); // стейт для ошибки
  const [editingCommentId, setEditingCommentId] = useState(null);// стейт для установки id редактируемого комментария 
  const [editedCommentText, setEditedCommentText] = useState("");// стект для 

  useEffect(() => {
    /**
     * Функция для загрузки комментариев с сервера.
     */
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

    fetchComments();
  }, [setComments]);

  /**
   * Обработчик нажатия на кнопку редактирования комментария.
   * 
   * @param {number} id - Идентификатор редактируемого комментария.
   */
  const handleEdit = (id) => {
    setEditingCommentId(id);
    const commentToEdit = comments.find((comment) => comment.id === id);
    setEditedCommentText(commentToEdit.text);
  };

  /**
   * Функция для сохранения изменений редактируемого комментария.
   */
  const handleSaveEdit = async () => {
    try {
      const currentDate = new Date().toISOString(); // Получаем текущую дату и время
      await axios.put(`http://localhost:3004/comments/${editingCommentId}`, {
        text: editedCommentText,
        userId: userId, // Передаем текущий userId
        date: currentDate, // Обновляем дату изменения комментария
      });
      const updatedComments = comments.map((comment) =>
        comment.id === editingCommentId
          ? { ...comment, text: editedCommentText, date: currentDate } // Обновляем комментарий с новым текстом и датой изменения
          : comment
      );
      setComments(updatedComments);
      setEditingCommentId(null);
    } catch (error) {
      console.error("Произошла ошибка при сохранении изменений:", error);
    }
  };

  /**
   * Обработчик нажатия на кнопку удаления комментария.
   * 
   * @param {number} id - Идентификатор удаляемого комментария.
   */
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3004/comments/${id}`);
      setComments(comments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error("Произошла ошибка при удалении комментария:", error);
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {editingCommentId === comment.id ? (
                    <textarea
                      value={editedCommentText}
                      onChange={(e) => setEditedCommentText(e.target.value)}
                    />
                  ) : (
                    <p className="text-gray-800 font-semibold">
                      {comment.text}
                    </p>
                  )}
                  <p className="text-gray-800">
                    {new Date(comment.date).toLocaleDateString("ru-RU")}
                  </p>
                </div>
                {isAuthenticated && userId === comment.userId && (
                  <div>
                    {editingCommentId === comment.id ? (
                      <button onClick={handleSaveEdit}>Сохранить</button>
                    ) : (
                      <button onClick={() => handleEdit(comment.id)}>
                        Изменить
                      </button>
                    )}
                    <button onClick={() => handleDelete(comment.id)}>
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
