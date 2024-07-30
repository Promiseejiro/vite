import PropTypes from "prop-types";
import { useState } from "react";

const SelectInput = ({ label, setValue, value, placeholder }) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <div className="relative">
      <div className="border-solid ">
        <label className="text-[14px]  flex items-center justify-start text-dark">
          {label}
        </label>
        <input
          readOnly
          placeholder={placeholder}
          value={value}
          onClick={() => {
            setShowDropDown(true);
          }}
          className="py-3  bg-white
           px-2 w-full border-solid border-[1.5px] placeholder-gray-200 text-dark  
              focus:outline-none focus:bg-gray focus:border-primary-100 border-gray-2  overflow-hidden text-[14px] text-font-light placeholder:font-300 
             "
        ></input>
        <div className="absolute top-[40px] right-2 "></div>
      </div>
      {showDropDown && (
        <div className="absolute top-19 left-0 w-full">
          <div className="border-[2px] border-solid border-gray w-full cursor-pointer bg-white py-1">
            <div
              onClick={() => {
                setValue("All");
                setShowDropDown(false);
              }}
            >
              <p className="rounded-b-[12px] overflow-hidden flex items-center justify-start px-2">
                Option 1
              </p>
            </div>
          </div>
          <div className="border-[2px] border-solid border-gray w-full cursor-pointer bg-white py-1">
            <div
              onClick={() => {
                setValue("All");
                setShowDropDown(false);
              }}
            >
              <p className="rounded-b-[12px] overflow-hidden flex items-center justify-start px-2">
                Option 2
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default SelectInput;
