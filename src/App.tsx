import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <h1>CONTENT</h1>
      <button onClick={openModal}>OPEN MODAL</button>
    </>
  );
}

export default App;
