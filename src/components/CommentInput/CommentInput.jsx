import React, { useState } from 'react';

const CommentInput = ({ addComment }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') {
      return; // Не добавляем пустые комментарии
    }
    addComment(text);
    setText(''); // Очищаем поле ввода после добавления комментария
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введите комментарий..."
        rows={4}
        className="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:border-blue-500"
      ></textarea>
      <button type="submit" className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Добавить комментарий</button>
    </form>
  );
};

export default CommentInput;
