interface InputDateProps {
  name: string;
  label: string;
  register: any;
}

const InputDate: React.FC<InputDateProps> = ({ label, register, name }) => {
  return (
    <div>
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <div className="relative">
        <input
          {...register(name)}
          type="date"
          className="custom-input-date custom-input-date-1 w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
    </div>
  );
};

export default InputDate;
