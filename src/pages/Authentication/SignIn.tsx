// Third Party
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from "@hookform/devtools";

// Components
import Input from '../../components/forms/input_text/Input';

interface FormValue {
  email: string;
  password: string;
}

const SignIn = () => {
  const form = useForm<FormValue>();
  const {register, handleSubmit, control, formState: { errors }} = form;

  function handleOnSubmit(formValue: FormValue) {
      console.log(formValue);
  }

  return (
          <div className="md:w-[35em] w-[30em] mx-auto border-stroke bg-meta-6 mt-[8em] dark:border-strokedark flex items-center justiy-center">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5 bg-white  mx-auto">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign In to Posbill Admin
              </h2>
    
              <form onSubmit={handleSubmit(handleOnSubmit)}>
                  <Input name='email' label='Email' register={register} />      
                  <Input type='password' name='password' label='Password' register={register} />

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
              </form>
            </div>
            <DevTool control={control} /> {/* set up the dev tool */}
          </div>
  );
};

export default SignIn;
