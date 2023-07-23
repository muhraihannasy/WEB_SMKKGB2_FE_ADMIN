const FormTitle = ({ title }) => {
  return (
    <div className="w-max mb-8">
      <h2 className=" text-strokedark text-[1.5em] font-semibold mb-2">
        {title}
      </h2>
      <span className="block w-full h-[3px] rounded-xl bg-strokedark"></span>
    </div>
  );
};

export default FormTitle;
