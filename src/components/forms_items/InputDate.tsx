import { useFormContext } from 'react-hook-form';

interface InputDateProps {
  name: string;
  label: string;
}

const InputDate: React.FC<InputDateProps> = ({ label, name }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="mb-[0.7em] block text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          {...register(name)}
          type="date"
          className="custom-input-date custom-input-date-1 w-full rounded-lg border-[1.5px] border-stroke bg-transparent h-[2.8125em]  px-5 font-medium outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
        />
      </div>
    </div>
  );
};

export default InputDate;
