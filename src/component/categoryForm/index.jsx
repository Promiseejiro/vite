import Button from "../button";
import TextInput from "../input";
import TextArea from "../TextArea";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/x-close.svg";
import Modal from "../SuccessModal";
import { useState } from "react";
import axios from "axios";
const CategoryForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ category: "", description: "" });
  const submitHandle = async () => {
    try {
      console.log(formData);
      const response = await axios.post("/endpoint", {
        // adjust the key to fit your request body key in your server
        category: formData.category,
        description: formData.description,
      });
      // change the response.success to fit the response from your server
      if (response.success) {
        // if request was successfull show modal
        setShowModal(true);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section>
      {!showModal && (
        <div className="w-full max-w-[300px] m-auto bg-white rounded p-4 relative">
          <img src={closeIcon} className="absolute right-4 top-4" />
          <img src={logo} />
          <h5 className="font-medium my-4 text-dark text-left">
            Create new category
          </h5>
          <TextInput
            value={formData.category}
            label="Category Name"
            placeholder="Category Name"
            setValue={(data) => {
              setFormData((prevData) => {
                return { ...prevData, category: data };
              });
            }}
          />
          <TextArea
            value={formData.description}
            label="Description"
            placeholder="Description"
            setValue={(data) => {
              setFormData((prevData) => {
                return { ...prevData, description: data };
              });
            }}
          />

          <Button
            onClick={() => {
              submitHandle();
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
