import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

const TabsStudy = () => {
  return (
    <Tabs isFitted variant="enclosed" colorScheme="red">
      <TabList mb="1em">
        <Tab fontWeight="bold">Базовый — 1700€</Tab>
        <Tab fontWeight="bold">Комфорт — 2200€</Tab>
        <Tab fontWeight="bold">VIP — 2600€</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p className="mb-4">Только поступление</p>
          <ul className="mb-4">
            <li className="list-disc">
              Полный процесс поступления на 3 программы
            </li>
            <li className="list-disc">Поддержка в чате 7 дней в неделю</li>
            <li className="list-disc">
              Оформление страховки на пребывание в Германии
            </li>
            <li className="list-disc">
              Доступ к системе для отслеживания процесса работы с куратором
            </li>
            <li className="list-disc">
              «3 авторских гайда: Основные шаги после зачисления», «Поиск жилья
              в Германии», «Полезное для студентов»
            </li>
          </ul>
        </TabPanel>
        <TabPanel>
          <p className="mb-4">Поступление + помощь с получением визы</p>
          <ul className="mb-4">
            <li className="list-disc">
              Полный процесс поступления на 5 программ
            </li>
            <li className="list-disc">2 видеоконсультации с куратором</li>
            <li className="list-disc">Поддержка в чате 7 дней в неделю</li>
            <li className="list-disc">
              Оформление страховки на пребывание в Германии
            </li>
            <li className="list-disc">Открытие блокированного счёта</li>
            <li className="list-disc">
              Оформление «въездной» страховки инкаминг
            </li>
            <li className="list-disc">Подготовка документов на визу</li>
            <li className="list-disc">
              Доступ к системе для отслеживания процесса работы с куратором
            </li>
            <li className="list-disc">Сопровождение подачи на визу</li>
            <li className="list-disc">
              «3 авторских гайда: Основные шаги после зачисления», «Поиск жилья
              в Германии», «Полезное для студентов»
            </li>
          </ul>
        </TabPanel>
        <TabPanel>
          <p className="mb-4">
            Поступление + визовое сопровождение + консультации первый месяц в
            Германии
          </p>
          <ul className="mb-4">
            <li className="list-disc">
              Полный процесс поступления на 5 программ
            </li>
            <li className="list-disc">3 видеоконсультации с куратором</li>
            <li className="list-disc">Поддержка в чате 7 дней в неделю</li>
            <li className="list-disc">
              Оформление страховки на пребывание в Германии
            </li>
            <li className="list-disc">Открытие блокированного счёта</li>
            <li className="list-disc">
              Оформление «въездной» страховки инкаминг
            </li>
            <li className="list-disc">Подготовка документов на визу</li>
            <li className="list-disc">
              Доступ к системе для отслеживания процесса работы с куратором
            </li>
            <li className="list-disc">Сопровождение подачи на визу</li>
            <li className="list-disc">Посвящение в студенты в ВУЗе</li>
            <li className="list-disc">Сопровождение подачи на ВНЖ</li>
            <li className="list-disc">
              «3 авторских гайда: Основные шаги после зачисления», «Поиск жилья
              в Германии», «Полезное для студентов»
            </li>
            <li className="list-disc">
              Сопровождение первого месяца в Германии
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TabsStudy;
