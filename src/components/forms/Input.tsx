import React, { useState } from "react";

const Input = ({
  type,
  label,
  placeholder,
  field,
  formDataType,
  position,
  formData,
  setFormData,
  data,
}) => {
  const className =
    "w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary";
  let value = formData[field];

  function handleOnChange(e: any) {
    if (formDataType == "array") {
      const newData = [...data];
      value = e.target.value;
      newData[position][field] = e.target.value;
      setFormData(newData);
      console.log(position);
      return;
    }

    setFormData({ ...formData, [field]: e.target.value });
  }

  return (
    <div>
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Input;
