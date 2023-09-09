// Third Party
import { FormProvider, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';

// Images
import LoginBackground from '/images/login.jpg';

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
    <div className="max-[1045px]:grid-cols-1 grid grid-cols-2 fixed top-0 left-0 w-full min-[1045px]:h-[100vh] h-full max-[1045px]:overflow-y-scroll">
      <div className="max-[1045px]:fixed max-[1045px]:w-full max-[1045px]:bottom-0 max-[1045px]:rounded-tr-[2em] max-[1045px]:rounded-tl-[2em] max-[1045px]:order-1 flex min-[1045px]:items-center justify-center bg-white max-[500px]:px-[2em] max-[1045px]:mt-[10em] max-[1045px]:h-max max-[1045px]:pb-[3em] max-[1045px]:overflow-y-scroll max-[1045px]:pt-[4em] z-[9]">
        <div className="max-[500px]:w-full max-[1045px]:mx-auto">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Sign In</h2>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="min-[500px]:w-[27em]  w-full"
            >
              <div className="flex flex-col gap-4">
                <Input name="email" label="Email" placeholder="Masukan Email" />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Masukan Password"
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
          </FormProvider>
        </div>
      </div>

      <Screen />
    </div>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
