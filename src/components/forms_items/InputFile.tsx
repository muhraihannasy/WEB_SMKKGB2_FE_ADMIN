import React from "react";

const InputFile = ({ label, field, imageUploads, setImageUploads }) => {
  return (
    <div>
      <div className="preview w-[9em] h-[9em] rounded-md overflow-hidden mb-4 bg-meta-2 flex items-center justify-center">
        No Image
        {/* <img
          src="https://images.unsplash.com/photo-1682686580452-37f1892ee5e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-full h-full object-cover"
        /> */}
      </div>
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <input
        type="file"
        className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm file:font-medium focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
      />
    </div>
  );
};

export default InputFile;
