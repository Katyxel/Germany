import React from "react";
import { FaStar } from "react-icons/fa";

const Table = () => {
  return (
    <div className="container bg-white">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded">
          <h2 className="text-xl font-semibold relative mb-2">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="pl-6"> Опытные специалисты</span>
          </h2>
          <p className="text-gray-800">
            С вами работают опытные специалисты, которые самостоятельно прошли
            поступление, поиск работы и адаптацию в Германии. С нами переехали и
            стали счастливыми жителями Германии более 900 человек. Мы готовы
            оказать помощь в любой ситуации!
          </p>
        </div>
        <div className="p-4 rounded">
          <h2 className="text-xl font-semibold relative mb-2">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="pl-6">Подберем лучшее решение</span>
          </h2>
          <p className="text-gray-800">
            За годы работы по сопровождению переезда в Германию мы накопили
            много опыта и искали решение в разных нестандартных ситуациях. Мы с
            радостью поделимся с вами нашим опытом и поможем исполнить вашу
            мечту.
          </p>
        </div>
        <div className="p-4 rounded">
          <h2 className="text-xl font-semibold relative mb-2">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="pl-6"></span>
            Экономия времени, нервов и денег
          </h2>
          <p className="text-gray-800">
            Порой ошибки в процессе подготовки к эмиграции могут стать
            фатальными. Из-за неправильно составленного мотивационного письма, у
            вас не примут документы в университете или из-за недостаточного
            знания немецкого вы пропустите дедлайны. С нами вы точно не попадете
            в такие ситуации!
          </p>
        </div>

        <div className="p-4 rounded">
          <h2 className="text-xl font-semibold relative mb-2">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="pl-6"></span>Всегда на связи
          </h2>
          <p className="text-gray-800">
            Часть нашей команды проживает в Германии постоянно, поэтому мы не
            понаслышке знаем, как долго отвечают разные фирмы и органы в
            Германии. У нас этого нет. Вы обязательно получите ответ в течение
            ближайшего рабочего дня.
          </p>
        </div>
        <div className="p-4 rounded">
          <h2 className="text-xl font-semibold relative mb-2">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="pl-6"></span>
            Ориентация на результат
          </h2>
          <p className="text-gray-800">
            Для нас важно, чтобы вы получили результат после работы с нами. Будь
            это выигрышное мотивационное письмо, трудоустройство в немецкую
            компанию или получение приглашения в университет.
          </p>
        </div>

        <div className="p-4 rounded">
          <h2 className="text-xl font-semibold relative mb-2">
            <FaStar className="h-5 w-5 text-yellow-500" />
            <span className="pl-6"></span>Удобная коммуникация
          </h2>
          <p className="text-gray-800">
            Мы за то, чтобы клиентам было удобно общаться с нами. Поэтому для
            коммуникации используем мессенджеры — WhatsApp, Telegram, Viber, а
            также email, телефон и любые другие средства связи.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Table;
