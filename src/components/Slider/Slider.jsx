import React, { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/**
 * Компонент слайдера.
 * @returns {JSX.Element} Элемент слайдера.
 */

const Slider = () => {
  const items = [
    {
      image: "/images/women4.jpg",
      name: "Вероника",
      description: "Консультант по иммиграции"
    },
    {
      image: "/images/men1.jpg",
      name: "Пётр",
      description: "Основатель LifeInGermany"
    },
    {
      image: "/images/women5.jpg",
      name: "Зарина",
      description: "Специалист по визам"
    },
    {
      image: "/images/women3.jpg",
      name: "Милана",
      description: "Эксперт по работе в Германии"
    },
    {
      image: "/images/men2.jpg",
      name: "Захар",
      description: "Переводчик"
    },
    {
      image: "/images/women1.jpg",
      name: "Вера",
      description: "Юрист-адвокат"
    },
    {
      image: "/images/women2.jpg",
      name: "Екатерина",
      description: "Универсальный солдат"
    },
    {
      image: "/images/men3.jpg",
      name: "Клим",
      description: "Специалист по отдельным услугам"
    },
  ];

    const [currentIndex, setCurrentIndex] = useState(0); // Состояние для индекса текущего элемента карусели
    const visibleItems = items.slice(currentIndex, currentIndex + 4); // Отображаемые элементы карусели


  /**
   * Обработчик для переключения на следующий слайд.
   */
  const handleNext = () => {
    if (currentIndex < items.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  /**
   * Обработчик для переключения на предыдущий слайд.
   */
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
    <div className={styles.imageContainer}>
      {visibleItems.map((item, index) => (
        <div key={index} className={styles.itemContainer}>
          <Image src={item.image} alt={item.name} width={300} height={400} />
          <div className={styles.overlay}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className={styles.buttonContainer}>
      <button onClick={handlePrev}>
      <FaChevronLeft className={styles.icon} />
      </button>
      <button onClick={handleNext}>
      <FaChevronRight className={styles.icon} />
      </button>
    </div>
  </div>
  
  );
};

export default Slider;
