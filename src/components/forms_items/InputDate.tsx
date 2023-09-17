import { useFormContext } from 'react-hook-form';

interface InputDateProps {
  name: string;
  label: string;
}

const InputDate: React.FC<InputDateProps> = ({ label, name }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors && errors[name] ? true : false;

  const style = {
    input: ` 
    custom-input-date custom-input-date-1 w-full rounded-lg border-[1.5px] bg-transparent h-[2.8125em]  px-5 font-medium outline-none transition   
    ${
      error
        ? 'border-danger'
        : ' border-stroke focus:border-primary active:border-primary'
    }`,
  };

  return (
    <div>
      <label className="mb-[0.7em] block text-black dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input {...register(name)} type="date" className={style.input} />
      </div>

      <span
        className={`block text-danger transition-all
        ${error ? 'visible opacity-100 mt-2' : 'invisible opacity-0'}
        `}
      >
        {error && errors[name]?.message}
      </span>
    </div>
  );
};

export default InputDate;
