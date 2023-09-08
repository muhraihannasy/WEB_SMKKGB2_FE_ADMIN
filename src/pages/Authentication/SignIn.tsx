// Third Party
import { FormProvider, useForm } from 'react-hook-form';
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
    <div className="max-[1009px]:flex max-[1009px]:flex-col grid grid-cols-2 fixed top-0 left-0 h-full w-full">
      <div className="flex min-[1009px]:items-center min-[1009px]:justify-center max-[1009px]:px-[1.8em] max-[1009px]:order-2 max-[1009px]:rounded-tl-[3em] max-[1009px]:rounded-tr-[3em] bg-white max-[1009px]:fixed max-[1009px]:w-full max-[1009px]:h-max max-[1009px]:py-[6em] max-[1009px]:bottom-0 max-[1009px]:z-[9]">
        <div className="max-[1009px]:w-full max-[1009px]:max-w-[30em] max-[1009px]:mx-auto">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Sign In</h2>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="max-[1009px]:w-full w-[27em]"
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
