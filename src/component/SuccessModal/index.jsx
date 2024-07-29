import Button from "../button";
import logo from "../../assets/modal_con.svg";
import closeIcon from "../../assets/x-close.svg";
import PropTypes from "prop-types";

const Modal = ({ closeModal }) => {
  return (
    <div className="relative w-full max-w-[300px] m-auto bg-white rounded p-4">
      <button className="outline-none border-none" onClick={closeModal}>
        <img src={closeIcon} className="absolute right-4 top-4" />
      </button>
      <img src={logo} />
      <h5 className="text-dark text-left font-medium my-4">
        Category Created Successfully
      </h5>
      <p className="text-dark text-left">
        Your new ticket category has been created and is now available for use.
        You can start assigning tickets to this category immediately.
      </p>
      <Button onClick={() => {}} />
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default Modal;
