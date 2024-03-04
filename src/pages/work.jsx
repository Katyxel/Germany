import React, { useState } from "react";


const WorkPage = () => {
  return (
    <div className="py-10 container">
      <div className="mx-auto flex flex-col justify-center items-center">
        <div className="bg-gray-800 w-full flex justify-center items-center p-8">
          <h1 className="text-white text-4xl font-bold">СОПРОВОЖДЕНИЕ ПОДАЧИ НА НАЦИОНАЛЬНУЮ ВИЗУ</h1>
        </div>
        <div className="bg-white w-full p-8">
          <p className="text-gray-800 text-xl text-center">Поможем с подготовкой документов, составим выигрышное мотивационное письмо, резюме по стандартам посольства и подготовим к интервью так, чтобы максимально снизить риски отказа.</p>
        </div>
      </div>
    </div>
  );
};

export default WorkPage;


// const Work = () => {
//   const [showModal, setShowModal] = useState(false);

//   // Функция открытия/закрытия модалки
//   const toggleModal = () => {
//     setShowModal((prevShowModal) => !prevShowModal);
//   };

//   const handleLogin = (loginData) => {
//     // Ваша логика для обработки входа пользователя
//     console.log("Logging in with:", loginData);
//     // Пример перехода на другую страницу (здесь переходим на главную страницу)
//     window.location.href = '/новый маршрут'
//   };

//   return (
//     <>
//       <section className="components">
//         <div className="container">
//           <h3>This is components page</h3>

//           <Card title="Товар 1" description="Описание 1"></Card>
//           <Card title="Товар 2" description="Описание 2"></Card>

//           <button onClick={toggleModal}>Show modal</button>
//         </div>
//       </section>

//       <Modal
//         titleModal="Заказать консультацию"
//         isOpen={showModal}
//         onClose={toggleModal}
//         onLogin={handleLogin}

//       >
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
//           explicabo.
//         </p>
//         <h3>
//           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet,
//           velit!
//         </h3>

//         <button>asdasda</button>
//       </Modal>

//       <div>
//           <label className="ui-label">Pick a fruit: </label>
//           <Select options={[
//   { value: "apple", label: "Apple" },
//   { value: "banana", label: "Banana" },
//   { value: "orange", label: "Orange" }
// ]} />
//         </div>

//     </>
//   );
// };

