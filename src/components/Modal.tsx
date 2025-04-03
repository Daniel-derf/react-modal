type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ isOpen, closeModal }: ModalProps) => {
  if (!isOpen) return "";

  return (
    <div className="modal-container">
      <span onClick={closeModal}>X</span>
      <h1>MODAL</h1>
    </div>
  );
};

export default Modal;
