import React, { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./SliderFeedbacks.module.css";

const SliderFeedbacks = () => {
  const items = [
    { image: "/images/2024-03-26_144428.jpg" },
    { image: "/images/2024-03-26_144511.jpg" },
    { image: "/images/2024-03-26_144532.jpg" },
    { image: "/images/2024-03-26_144602.jpg" },
    { image: "/images/2024-03-26_144636.jpg" },
    { image: "/images/2024-03-26_144657.jpg" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative flex justify-center items-center">
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.itemContainer}>
            <Image src={items[currentIndex].image} alt={items[currentIndex].name} width={500} height={600} />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button onClick={handlePrev} className={styles.buttonLeft}>
            <FaChevronLeft className={styles.icon} />
          </button>
          <button onClick={handleNext} className={styles.buttonRight}>
            <FaChevronRight className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderFeedbacks;
