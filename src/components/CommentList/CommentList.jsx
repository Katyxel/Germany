import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentList = ({ comments, setComments }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get('http://localhost:3004/comments');
        setComments(response.data);
        setLoading(false);
      } catch (error) {
        setError("Произошла ошибка при загрузке комментариев");
        setLoading(false);
      }
    };

    fetchComments();
  }, [setComments]); // Зависимость useEffect от setComments

  if (loading) {
    return <p>Загрузка комментариев...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Комментарии</h2>
      {comments.length === 0 ? (
        <p className="text-gray-600">Пока здесь нет комментариев.</p>
      ) : (
        <ul className="divide-y divide-gray-300">
          {comments.map((comment) => (
            <li key={comment.id} className="py-2">
              <p className="text-gray-800 font-semibold">{comment.text}</p>
              <p className="text-gray-800">{new Date(comment.date).toLocaleDateString('ru-RU')}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
