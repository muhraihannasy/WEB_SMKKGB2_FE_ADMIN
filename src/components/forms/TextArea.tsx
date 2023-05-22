import React from "react";

const TextArea = ({
  label,
  placeholder,
  field,
  formDataType,
  position,
  formData,
  setFormData,
}) => {
  let value = formData[field];

  function handleOnChange(e: any) {
    if (formDataType == "array") {
      const data = [...formData];
      data[position][field] = e.target.value;
      setFormData(data);
      return;
    }

    setFormData({ ...formData, [field]: e.target.value });
  }

  return (
    <div>
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <textarea
        rows={6}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      ></textarea>
    </div>
  );
};

export default TextArea;
