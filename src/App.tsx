import { useState } from "react";
import "./App.css";

// components
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
    <div className="app-container">
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <h1>CONTENT</h1>
      <button onClick={openModal} className="container-btn">
        OPEN MODAL
      </button>
    </div>
  );
}

export default App;
