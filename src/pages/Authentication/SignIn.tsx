// Third Party
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';

// Images
import background from '../../images/background_abstract.jpg';

interface FormValue {
  email: string;
  password: string;
}

const SignIn = () => {
  const form = useForm<FormValue>();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  function handleOnSubmit(formValue: FormValue) {
    console.log(formValue);
  }

  return (
    <div className="grid grid-cols-2 fixed top-0 left-0 w-full h-full bg-white">
      <div className="flex items-center justify-center">
        <div>
          <h2 className="text-[2em] mb-10 font-semibold text-black">Sign In</h2>

          <form onSubmit={handleSubmit(handleOnSubmit)} className="w-[27em]">
            <div className="flex flex-col gap-4">
              <Input
                name="email"
                label="Email"
                placeholder="Masukan Email"
                register={register}
              />
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Masukan Password"
                register={register}
              />
            </div>

            <Link
              to="/auth/signup"
              className="text-primary font-medium block my-4 text-right"
            >
              Lupa Password ?
            </Link>

            <Button bg="primary" size="full">
              Sign In
            </Button>

            <p className="text-center mt-6">
              Belum Memiliki Akun ?{' '}
              <Link to="/auth/signup" className="text-primary font-medium">
                Daftar Disini
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Screen />
    </div>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
