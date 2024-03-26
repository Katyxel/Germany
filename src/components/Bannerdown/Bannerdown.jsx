import React from "react";
import Image from "next/image";
import bann from "../../../public/images/banner2.jpg";
import styles from "../BannerDown/BannerDown.module.css";
import Link from "next/link";

/**
 * Компонент баннера для предложения бесплатного сопровождения в языковые школы.
 *
 * @component
 */
const Bannerdown = () => {
  return (
    <div className={styles.banner}>
      <div className={styles["banner-content"]}>
        <div className={styles["image-container"]}>
          <div className={styles["image-overlay"]} />
          <Image src={bann} alt="Баннер" className={styles["banner-image"]} priority={true} />
        </div>
        <h2 className={styles["banner-text"]}>
          Бесплатное сопровождение <br />в языковые школы
        </h2>
        <p className={styles["banner-descr"]}>
          Поступай в языковые школы Германии со 100% гарантией с нами бесплатно!
        </p>
        <Link href="/courses" className={styles["apply-button"]}>
          Узнать подробнее
        </Link>
      </div>
    </div>
  );
};

export default Bannerdown;
