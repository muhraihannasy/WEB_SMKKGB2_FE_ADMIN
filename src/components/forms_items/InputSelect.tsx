import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface InputSelectProps {
  placeholder: string;
  label: string;
  name: string;
  options?: any[];
}

const InputSelect: React.FC<InputSelectProps> = ({
  label,
  placeholder,
  options,
  name,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors && errors[name] ? true : false;

  const className = `relative z-20 w-full rounded-lg appearance-none rounded border bg-transparent h-[2.8125em]  px-4 outline-none transition
     ${
       error
         ? 'border-danger'
         : ' border-stroke focus:border-primary active:border-primary'
     }
    `;

  return (
    <div>
      <label className="mb-3 block text-black dark:text-white" htmlFor={name}>
        {label}
      </label>
      <div className="relative z-20 bg-white dark:bg-form-input">
        <select
          id={name}
          placeholder={placeholder}
          className={className}
          {...register(name)}
        >
          <option value="">Pilih...</option>
          {options.map((item, i) => (
            <option value={item} key={i}>
              {item}
            </option>
          ))}
        </select>
        <span className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.8">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                fill="#637381"
              ></path>
            </g>
          </svg>
        </span>
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

export default InputSelect;
