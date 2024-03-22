import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";
import Link from "next/link";
import LoginModal from "../LoginModal/LoginModal";
import RegistrationForm from "../Registration/Registration";

/**
 * Компонент навигации.
 * @returns {JSX.Element} Элемент навигации.
 */
const Navigation = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  /**
   * Элементы навигации.
   * @type {Array<{ name: string, path: string }>}
   */
  
  const navItems = [
    { name: "ВИЗА", path: "/visa" },
    { name: "РАБОТА", path: "/work" },
    { name: "УЧЁБА", path: "/student" },
    { name: "КУРСЫ ЯЗЫКА", path: "/courses" },
    { name: "ОТЗЫВЫ", path: "/feedbacks" },
    { name: "ФОРУМ", path: "/forum" },
  ];

  /**
   * Путь активного элемента навигации.
   * @type {string}
   */
  const activeLink =
    navItems.find((item) => item.path === router.pathname)?.path || "";

  /**
   * Обработчик клика по элементу навигации.
   * @param {string} path Путь элемента навигации.
   */
  const onClickHandler = (path) => {
    router.push(path);
  };

  /**
   * Открыть модальное окно для входа.
   */
  const openModal = () => {
    setIsModalOpen(true);
  };

  /**
   * Открыть модальное окно для регистрации.
   */
  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  return (
    <header className={styles.header}>
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" passHref className="inline-flex items-center">
            <svg
              width="200"
              height="130"
              viewBox="0 0 242 144"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_1)">
                <path
                  d="M170 69L160.132 87.0771V89.9755L150 104L159.068 87.099L150 74.6667L157.358 82.1333L159.391 85.6771C159.416 85.7208 159.49 85.8813 159.613 86.1583H159.632C159.674 86.0344 159.754 85.874 159.872 85.6771L162 82.1333L170 69Z"
                  fill="black"
                />
                <path
                  d="M148.4 94.4023H147.009L142.025 87.7051C141.899 87.5371 141.795 87.3613 141.714 87.1777H141.673C141.71 87.3574 141.728 87.7422 141.728 88.332V94.4023H140.593V86H142.065L146.914 92.5918C147.117 92.8652 147.247 93.0527 147.306 93.1543H147.333C147.288 92.9121 147.265 92.5 147.265 91.918V86H148.4V94.4023Z"
                  fill="black"
                />
                <path
                  d="M136.395 94.4023H135.139L134.112 92.0469H130.006L129.04 94.4023H127.777L131.492 86H132.667L136.395 94.4023ZM133.741 91.1621L132.221 87.582C132.172 87.4648 132.122 87.2773 132.073 87.0195H132.046C132.001 87.2578 131.949 87.4453 131.89 87.582L130.384 91.1621H133.741Z"
                  fill="black"
                />
                <path
                  d="M123.579 94.4023H122.452V88.7656C122.452 88.3203 122.483 87.7754 122.546 87.1309H122.519C122.411 87.5098 122.314 87.7812 122.229 87.9453L118.919 94.4023H118.366L115.063 87.9922C114.969 87.8047 114.872 87.5176 114.773 87.1309H114.746C114.782 87.4668 114.8 88.0156 114.8 88.7773V94.4023H113.706V86H115.205L118.177 91.8594C118.406 92.3086 118.555 92.6445 118.622 92.8672H118.663C118.856 92.4062 119.012 92.0625 119.129 91.8359L122.161 86H123.579V94.4023Z"
                  fill="black"
                />
                <path
                  d="M109.602 94.4023H108.251L106.631 92.0469C106.482 91.8281 106.338 91.6426 106.198 91.4902C106.059 91.334 105.915 91.207 105.766 91.1094C105.622 91.0117 105.465 90.9414 105.293 90.8984C105.127 90.8516 104.938 90.8281 104.726 90.8281H103.794V94.4023H102.66V86H105.55C105.973 86 106.363 86.0469 106.718 86.1406C107.079 86.2305 107.389 86.3691 107.65 86.5566C107.916 86.7441 108.123 86.9785 108.272 87.2598C108.42 87.5371 108.495 87.8633 108.495 88.2383C108.495 88.5312 108.443 88.8008 108.339 89.0469C108.24 89.2891 108.096 89.5059 107.907 89.6973C107.722 89.8887 107.497 90.0527 107.232 90.1895C106.971 90.3223 106.676 90.4258 106.347 90.5V90.5234C106.509 90.5859 106.649 90.6582 106.766 90.7402C106.887 90.8184 107.002 90.9121 107.11 91.0215C107.218 91.1309 107.324 91.2559 107.428 91.3965C107.536 91.5332 107.655 91.6934 107.785 91.877L109.602 94.4023ZM103.794 86.8906V89.9375H105.334C105.618 89.9375 105.879 89.9004 106.117 89.8262C106.36 89.752 106.57 89.6465 106.745 89.5098C106.921 89.3691 107.058 89.1992 107.157 89C107.256 88.7969 107.306 88.5703 107.306 88.3203C107.306 87.8711 107.137 87.5215 106.799 87.2715C106.466 87.0176 105.982 86.8906 105.347 86.8906H103.794Z"
                  fill="black"
                />
                <path
                  d="M98.0293 94.4023H92.8966V86H97.8132V86.8906H94.0312V89.6855H97.5295V90.5703H94.0312V93.5117H98.0293V94.4023Z"
                  fill="black"
                />
                <path
                  d="M87.8747 93.8281C86.9021 94.3047 85.8216 94.543 84.6329 94.543C83.2507 94.543 82.1319 94.1562 81.2764 93.3828C80.4255 92.6094 80 91.5859 80 90.3125C80 89.0117 80.4727 87.9453 81.4182 87.1133C82.3682 86.2773 83.5704 85.8594 85.0246 85.8594C86.0782 85.8594 86.9629 86.0078 87.6788 86.3047V87.3945C86.8954 86.9648 85.9679 86.75 84.8963 86.75C83.8113 86.75 82.922 87.0742 82.2287 87.7227C81.5353 88.3711 81.1886 89.2109 81.1886 90.2422C81.1886 91.3047 81.5105 92.1406 82.1544 92.75C82.7982 93.3555 83.6717 93.6582 84.7748 93.6582C85.5312 93.6582 86.1863 93.5273 86.7401 93.2656V90.9102H84.6194V90.0195H87.8747V93.8281Z"
                  fill="black"
                />
                <path
                  d="M124.577 79.1383C124.577 79.3063 124.144 79.3903 123.277 79.3903C122.41 79.3903 121.94 79.3303 121.866 79.2103L119.556 75.4663V79.1983C119.556 79.3423 119.127 79.4143 118.27 79.4143C117.422 79.4143 116.997 79.3423 116.997 79.1983V71.1703C116.997 71.0503 117.362 70.9903 118.09 70.9903C118.376 70.9903 118.708 71.0143 119.086 71.0623C119.473 71.1023 119.708 71.1823 119.791 71.3023L122.004 74.9983V71.2303C122.004 71.0783 122.433 71.0023 123.291 71.0023C124.148 71.0023 124.577 71.0783 124.577 71.2303V79.1383Z"
                  fill="black"
                />
                <path
                  d="M110.597 77.3383V73.0663H109.615C109.459 73.0663 109.348 72.8943 109.283 72.5503C109.256 72.3823 109.242 72.2103 109.242 72.0343C109.242 71.8583 109.256 71.6863 109.283 71.5183C109.348 71.1743 109.459 71.0023 109.615 71.0023H114.263C114.42 71.0023 114.526 71.1743 114.581 71.5183C114.618 71.6863 114.636 71.8583 114.636 72.0343C114.636 72.2103 114.618 72.3823 114.581 72.5503C114.526 72.8943 114.42 73.0663 114.263 73.0663H113.336V77.3383H114.304C114.461 77.3383 114.572 77.5103 114.636 77.8543C114.673 78.0223 114.692 78.1943 114.692 78.3703C114.692 78.5463 114.673 78.7183 114.636 78.8863C114.572 79.2303 114.461 79.4023 114.304 79.4023H109.643C109.486 79.4023 109.38 79.2303 109.325 78.8863C109.288 78.7183 109.27 78.5463 109.27 78.3703C109.27 78.1943 109.288 78.0223 109.325 77.8543C109.38 77.5103 109.486 77.3383 109.643 77.3383H110.597Z"
                  fill="black"
                />
                <path
                  d="M131.971 64.4023H126.839V56H131.755V56.8906H127.973V59.6855H131.472V60.5703H127.973V63.5117H131.971V64.4023Z"
                  fill="black"
                />
                <path
                  d="M122.235 56.8906H118.453V59.7969H121.952V60.6816H118.453V64.4023H117.319V56H122.235V56.8906Z"
                  fill="black"
                />
                <path d="M112 64.4023H110.865V56H112V64.4023Z" fill="black" />
                <path
                  d="M103.025 64.4023H98V47L99.1346 56V63.5117L109 64.4023H103.025Z"
                  fill="black"
                />
              </g>
              <g filter="url(#filter1_d_0_1)">
                <path
                  d="M94.6756 135.599L112.983 122.414C116.73 119.716 118.603 118.367 120.159 118.335C121.839 118.3 123.424 119.112 124.378 120.496C125.262 121.777 125.262 124.086 125.262 128.703V135.599L155.396 109.505C155.475 109.436 155.515 109.402 155.552 109.371C156.967 108.192 158.916 107.887 160.624 108.577C160.669 108.596 160.717 108.616 160.814 108.657V108.657C161.369 108.894 161.646 109.013 161.757 109.054C166.537 110.833 170.6 105.152 167.372 101.203C167.297 101.112 167.095 100.887 166.692 100.439L165.911 99.5711L181.202 102.76C184.916 103.535 186.773 98.4438 183.432 96.6455V96.6455C180.424 95.0262 181.574 90.4615 184.991 90.4615H214.411L196.459 80.6591C190.806 77.5719 187.979 76.0284 187.304 74.3945C186.578 72.6358 186.914 70.6174 188.169 69.1877C189.336 67.8596 192.51 67.3129 198.858 66.2195L238 59.4774L171.943 61.9359L148.081 49.531L176.905 28.4286C186.872 21.1313 191.855 17.4827 193.87 17.7689C196.03 18.0757 197.742 19.7476 198.099 21.8997C198.433 23.9072 194.903 28.9753 187.842 39.1115L171.943 61.9359L165.911 99.5711L90.3801 112.134L52.4344 113.533C52.0677 113.546 51.8843 113.553 51.7027 113.573C51.5045 113.595 51.3078 113.629 51.1136 113.674C50.9356 113.716 50.7605 113.77 50.4102 113.88L23.2722 122.352C23.091 122.409 22.9144 122.479 22.7439 122.562L15.6413 126.036C12.2616 127.689 9.44553 122.982 12.5 120.786V120.786L41.4422 99.9722C41.64 99.83 41.7388 99.7589 41.834 99.6832C41.9378 99.6006 42.0383 99.5139 42.1352 99.4233C42.224 99.3403 42.3089 99.2528 42.4785 99.078L107 32.6044L108.527 37.7727C109.617 41.4629 110.162 43.308 111.221 44.2555C112.367 45.2801 113.92 45.7209 115.433 45.4506C116.833 45.2008 118.265 43.9168 121.131 41.349L145.002 19.9594C152.349 13.3758 156.023 10.0841 157.984 10.1179C160.09 10.1541 161.947 11.5056 162.629 13.4979C163.264 15.3541 161.262 19.862 157.256 28.8777L148.081 49.531L120.906 14.0003C116.895 8.75613 114.89 6.13406 113.157 5.72198C111.292 5.27848 109.338 5.94014 108.126 7.42533C107 8.80529 107 12.1064 107 18.7085V32.6044L72.5496 0.968964L76.0265 5.93213C80.1187 11.7736 82.1648 14.6944 82.0054 16.5089C81.8339 18.4606 80.5384 20.1323 78.6912 20.7854C76.9739 21.3926 73.6349 20.1401 66.957 17.635L61.5297 15.5991L30 0.968964L57.7037 18.2822C64.1734 22.3255 67.4083 24.3471 67.9597 26.1177C68.5525 28.0212 67.9578 30.095 66.4463 31.3951C65.0403 32.6044 61.2257 32.6044 53.5964 32.6044H15L44.1504 42.1819C50.578 44.2937 53.7918 45.3497 54.7514 46.8656C55.784 48.4969 55.7851 50.5769 54.7544 52.2093C53.7965 53.7264 50.5838 54.7858 44.1585 56.9048L4.461 69.9962H29.7314C38.532 69.9962 42.9323 69.9962 44.3582 71.2785C45.8896 72.6558 46.4198 74.8312 45.6938 76.7586C45.0179 78.5532 41.111 80.5778 33.2974 84.6271L4.461 99.5711L58.8348 84.9276C61.3708 84.2446 62.6388 83.9031 63.7376 84.0987C64.9298 84.3109 66.0045 84.9486 66.7621 85.8933C67.4603 86.7639 67.7682 88.0405 68.3841 90.5937L69.3601 94.64C69.7671 96.3274 69.9706 97.171 69.9048 97.972C69.8331 98.8433 69.5342 99.6806 69.038 100.4C68.5817 101.062 67.89 101.586 66.5066 102.634L43.2582 120.25C39.31 123.241 42.5228 129.467 47.2486 127.983L60.7412 123.745C62.9626 123.047 64.4558 125.992 62.5804 127.372V127.372C60.6713 128.776 62.2536 131.765 64.4885 130.975L87.1673 122.964C87.9193 122.699 88.2954 122.566 88.5905 122.5C91.4748 121.859 94.2831 123.845 94.6392 126.778C94.6756 127.079 94.6756 127.477 94.6756 128.275V135.599Z"
                  fill="url(#pattern0)"
                  shapeRendering="crispEdges"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_1"
                  x="66"
                  y="47"
                  width="108"
                  height="66.543"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d_0_1"
                  x="0.460999"
                  y="0.968964"
                  width="241.539"
                  height="142.63"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_1"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_1"
                    result="shape"
                  />
                </filter>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    href="#image0_0_1"
                    transform="matrix(-0.00104167 0 0 -0.00181709 1 1.18141)"
                  />
                </pattern>
                <image
                  id="image0_0_1"
                  width="960"
                  height="750"
                  href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </Link>
          <nav className={`${styles.nav} inline-flex items-center gap-14`}>
            {navItems.map((item) => (
              <a
                key={item.path}
                onClick={() => onClickHandler(item.path)}
                className={`cursor-pointer ${styles.navItem} ${
                  item.path === activeLink ? styles.activeNavItem : ""
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        <div className="buttons-container">
          <button
            className="bg-yellow-400 hover:bg-yellow-600 text-black font-bold py-1 px-2 rounded mr-3"
            style={{ height: "30px" }}
            onClick={openModal}
          >
            Войти
          </button>
          <button
            className="bg-red-700 hover:bg-red-500 text-white font-bold py-1 px-2 rounded"
            style={{ height: "30px" }}
            onClick={openRegistrationModal}
          >
            Регистрация
          </button>
        </div>
      </div>
      {isModalOpen && <LoginModal closeModal={() => setIsModalOpen(false)} />}
      {isRegistrationModalOpen && (
        <RegistrationForm
          closeModal={() => setIsRegistrationModalOpen(false)}
        />
      )}
    </header>
  );
};

export default Navigation;
