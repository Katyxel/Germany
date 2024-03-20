import React from "react";

import AccordionComponent from '../components/Accordion/Accordion'; // Импортируем компонент форума

const FeedbackPage = () => {
  return (
    <div className="container">
      {/* Вставляем компонент форума */}
      <AccordionComponent />
    </div>
  );
};

export default FeedbackPage;
