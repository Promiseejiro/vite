import PropTypes from "prop-types";

const Button = ({ onClick }) => {
  return (
    <button
      className="w-full p-2 flex items-center justify-center bg-primary text-white rounded-none mt-4"
      onClick={onClick}
    >
      Submit
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
