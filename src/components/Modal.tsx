import "./Modal.css";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ isOpen, closeModal }: ModalProps) => {
  return (
    <div className={`modal-container`} style={{ display: `${isOpen ? `block` : `none`}` }}>
      <span className="container-close" onClick={closeModal}>
        X
      </span>
      <div className="container-content">
        <h1>MODAL</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus varius sem quis sem mattis, tincidunt mattis
          tortor mattis. Phasellus egestas scelerisque purus, sed facilisis neque auctor in. Duis auctor quam ultricies
          eleifend bibendum. Quisque quis massa ac quam pulvinar luctus. Vestibulum consectetur convallis odio, eget
          congue massa ultrices vel. Cras ut tincidunt purus, et tincidunt dolor. Donec placerat cursus est, id dapibus
          risus luctus ac. Mauris semper ac lorem sit amet tincidunt. Fusce in blandit diam.
        </p>
      </div>
    </div>
  );
};

export default Modal;
