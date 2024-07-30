import PropTypes from "prop-types";
const TextArea = ({ label, setValue, value, placeholder }) => {
  return (
    <div className="my-3 relative">
      <div className="font-light my-2  flex items-center justify-start text-dark">
        {label}
      </div>
      <textarea
        type="text"
        className="px-2 w-full border-solid border-[1.5px] border-gray text-dark  bg-white
        focus:outline-none focus:border-primary py-2"
        value={value}
        placeholder={placeholder}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></textarea>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default TextArea;
