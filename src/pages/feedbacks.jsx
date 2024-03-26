import React, { useState } from "react";
import FeedBacks from "../components/FeedBacks/FeedBacks";
import SliderFeedbacks from "../components/SliderFeedbacks/SliderFeedbacks";

const FeedbackPage = () => {
  const [showModal, setShowModal] = useState(false);

  /**
   * Функция для открытия модального окна.
   */
  const openModal = () => {
    setShowModal(true);
  };

  /**
   * Функция для закрытия модального окна.
   */
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="bg-gray-800 text-white py-4 mt-6">
        <div className="container mx-auto mt-8">
          <h1 className="text-4xl font-bold text-center">
            ОТЗЫВЫ О LifeInGermany
          </h1>
        </div>
      </div>

      <div className="bg-white w-full p-8">
        <p className="text-gray-800 text-xl text-center">
          Этот раздел мы создали для вашего вдохновения и мотивации. Гораздо
          проще поверить в свои силы и увидеть новые возможности, если
          познакомиться с реальными историями переезда.
        </p>
      </div>
      <FeedBacks />
      <SliderFeedbacks /> 
    </div>
  );
};

export default FeedbackPage;
