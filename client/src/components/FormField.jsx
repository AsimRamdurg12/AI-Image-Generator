const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="text-xs font-semibold bg-[#ececf1] py-1 px-2 rounded text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required={true}
        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none w-full p-3"
      />
    </div>
  );
};

export default FormField;
