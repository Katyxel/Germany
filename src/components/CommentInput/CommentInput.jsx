import React, { useState } from "react";
import CategorySelect from "../Select/Select";

const CommentInput = ({ addComment, setNewCommentId }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(""); // Добавляем состояние для хранения выбранной категории

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text.trim() === "" || category === "") {
      return; // Не добавляем пустые комментарии или категории
    }
    const newComment = await addComment(text, category); // Передаем категорию в функцию добавления комментария
    if (newComment && newComment.id) {
      setNewCommentId(newComment.id);
    }
    setText("");
    setCategory(""); // Очищаем состояние категории после добавления комментария
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
      <div className="flex flex-col">
        <CategorySelect
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-500 focus:bg-gray-700 text-white px-3 py-1 rounded my-4"
          style={{ width: "fit-content" }} // Устанавливаем ширину по содержимому
        >
          Добавить комментарий
        </button>
      </div>
    </form>
  );
};

export default CommentInput;
