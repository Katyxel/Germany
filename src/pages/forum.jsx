import React from 'react';
import Forum from '../components/Forum/Forum'; // Импортируем компонент форума

const ForumPage = () => {
  return (
    <div div className="container">
      <h1>Форум</h1>
      {/* Вставляем компонент форума */}
      <Forum />
    </div>
  );
};

export default ForumPage;