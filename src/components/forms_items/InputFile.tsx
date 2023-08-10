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
      <div>
        <label className="mb-3 block text-black dark:text-white">
          Attach file
        </label>
        <input
          type="file"
          className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent font-medium outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
        />
      </div>
    </div>
  );
};

export default InputFile;
