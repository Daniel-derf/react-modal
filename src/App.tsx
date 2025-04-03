import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Modal isOpen={openModal} />
      <h1>CONTENT</h1>
    </>
  );
}

export default App;
