import Button from "../button";
import TextInput from "../input";
import SelectInput from "../selectInput";
import TextArea from "../TextArea";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/x-close.svg";
import Modal from "../SuccessModal";
import { useState } from "react";
const CategoryForm = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section>
      {!showModal && (
        <div className="w-full max-w-[300px] m-auto bg-white rounded p-4 relative">
          <img src={closeIcon} className="absolute right-4 top-4" />
          <img src={logo} />
          <TextInput
            value={""}
            label="Category Name"
            placeholder="Category Name"
            setValue={() => {}}
          />
          <TextArea
            value={""}
            label="Description"
            placeholder="Category Name"
            setValue={() => {}}
          />
          <SelectInput
            value={""}
            label="Assign employee"
            placeholder="Category Name"
            setValue={() => {}}
          />
          <Button
            onClick={() => {
              setShowModal(true);
            }}
          />
        </div>
      )}
      {showModal && (
        <Modal
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </section>
  );
};

export default CategoryForm;
