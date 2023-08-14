import { useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
};

const className = {
  label: 'mb-2.5 block font-medium text-black dark:text-white',
  input:
    'w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 h-[2.8125em] outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary',
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
}) => {
  const { register } = useFormContext();

  return (
    <div>
      <label htmlFor={name} className={className.label}>
        {label}
      </label>
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        required={required}
        className={className.input}
      />
      {/* {errors && <span className="text-red-500">{errors[name]?.message}</span>} */}
    </div>
  );
};

export default Input;
