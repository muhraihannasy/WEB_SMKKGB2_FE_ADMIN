import { useFormContext } from 'react-hook-form';

type InputProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  errors: any;
};

const Input: React.FC<InputProps> = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors && errors[name] ? true : false;

  const className = {
    label: 'mb-2.5 block  text-black dark:text-white',
    input: `w-full rounded-lg border-[1.5px] bg-transparent px-5 h-[2.8125em] outline-none transition  disabled:cursor-default disabled:bg-whiter
      ${
        error
          ? 'border-danger'
          : ' border-stroke focus:border-primary active:border-primary'
      }
      `,
  };

  return (
    <div className={`relative transition-all ${error ? 'mb-2' : 'mb-0'}`}>
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

export default Input;
