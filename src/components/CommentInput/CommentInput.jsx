import React, { useState } from "react";

/**
 * Компонент для ввода комментария.
 *
 * Этот компонент позволяет пользователю вводить текст комментария и отправлять его.
 * После отправки комментария, очищает поле ввода.
 *
 * @param {object} props - Свойства компонента.
 * @param {function} props.addComment - Функция для добавления комментария.
 * @param {function} props.setNewCommentId - Функция для установки ID нового комментария.
 * @returns {ReactNode} - Возвращает элемент инпута после добавления комментария.
 */
const CommentInput = ({ addComment, setNewCommentId }) => {
  const [text, setText] = useState("");

  /**
   * Обработчик отправки формы.
   *
   * Проверяет, что введенный текст не пустой.
   * Добавляет комментарий при непустом вводе и очищает поле ввода.
   *
   * @param {object} e - Событие отправки формы.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "") {
      return; // Не добавляем пустые комментарии
    }
    const newComment = await addComment(text);
    if (newComment && newComment.id) {
      // Проверяем, что newComment не undefined и имеет свойство id
      setNewCommentId(newComment.id); // Устанавливаем ID нового комментария
    }
    setText(""); // Очищаем поле ввода после добавления комментария
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите комментарий..."
        rows={4}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-gray-700"
      ></textarea>
      <button
        type="submit"
        className="my-4 bg-yellow-500 focus:bg-gray-700 text-white px-3 py-1 rounded"
      >
        Добавить комментарий
      </button>
    </form>
  );
};

export default CommentInput;
