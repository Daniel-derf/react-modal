type ModalProps = {
  isOpen: boolean;
};

const Modal = ({ isOpen }: ModalProps) => {
  if (!isOpen) return "";

  return <div>Modal</div>;
};

export default Modal;
