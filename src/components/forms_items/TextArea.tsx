import { useFormContext } from 'react-hook-form';

type TextareaProps = {
  name: string;
  label: string;
  placeholder?: string;
};

const TextArea: React.FC<TextareaProps> = ({ name, label, placeholder }) => {
  const { register } = useFormContext();

  return (
    <div>
      <label className="mb-3 block text-black dark:text-white">{label}</label>
      <textarea
        {...register(name)}
        rows={6}
        placeholder={placeholder}
        className="w-full rounded-md border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
      ></textarea>
    </div>
  );
};

export default TextArea;
