import React from "react";
import Bannerdown from "../components/Bannerdown/Bannerdown";
import Slider from "../components/Slider/Slider";
import CardsStudy from "../components/CardsStudy/CardsStudy";

const Student = () => {

return (
    <div className="py-10 container">
      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="bg-gray-800 w-full flex justify-center items-center p-8">
          <h1 className="text-white text-4xl font-bold">УЧЁБА В ГЕРМАНИИ</h1>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center">
          Команда LifeInGermany напрямую сотрудничает со всеми языковыми курсами и ВУЗами Германии, включая государственные и частные. С пакетом «Всё включено» мы предоставим полный цикл услуг и консультаций, начиная от помощи в выборе будущей профессии до получения приглашения.
          </p>
        </div>
      </div>

      <CardsStudy />

      <div className="mx-auto text-center">
  <div className="bg-yellow-500 p-8">
    <h1 id="programmers" className="text-gray-800 text-4xl font-bold">
      ГАРАНТИЯ ПОСТУПЛЕНИЯ В ВУЗЫ
    </h1>
    <p className="text-gray-800 text-xl font-bold">
      99% наших абитуриентов получают минимум 1 приглашение. Если вы попали в тот 1%, который не получил приглашение, мы подадим вас на следующий семестр на 3 программы абсолютно бесплатно!*
      <br />
      *повторная подача не предоставляется на специальности с конкурсным отбором
    </p>
  </div>
</div>
      <Bannerdown />
      <h1 className="text-5xl text-center font-bold text-gray-800 my-14">
        С Вами работают
      </h1>
      <Slider />
    </div>

  );
};

export default Student;