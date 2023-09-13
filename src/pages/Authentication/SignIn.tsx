// Third Party
import { Link } from 'react-router-dom';
import { FormProvider, useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';
import { toastError, toastSuccess } from '../../components/Toast/index';

// Images
import LoginBackground from '/images/login.jpg';
import { useEffect } from 'react';
import ROUTE from '../../route';

interface FormValue {
  email: string;
  password: string;
}

const formSchema = Yup.object().shape({
  email: Yup.string().email('Email tidak valid').required('Email wajib diisi'),
  password: Yup.string()
    .min(6, 'Password harus memiliki minimal 6 karakter')
    .required('Password wajib diisi'),
});

const SignIn = () => {
  const form = useForm<FormValue>({
    resolver: yupResolver(formSchema),
  });
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  function handleOnSubmit(formValue: FormValue) {
    console.log(formValue);
  }

  useEffect(() => {
    const keys = Object.keys(errors);

    if (keys.length > 0) {
      const firstErrorMessage = errors[keys[0]]?.message;
      // Tidak ada pesan kesalahan, melanjutkan logika login.
      // toastError(firstErrorMessage);
      console.log();
    }
  }, [errors]);

  return (
    <main className="max-[1045px]:grid-cols-1 grid grid-cols-2 top-0 left-0 w-full min-[1045px]:h-[100vh] bg-danger">
      <div className="h-[100vh] max-[1045px]:relative max-[1045px]:w-full max-[1045px]:rounded-tr-[2em] max-[1045px]:rounded-tl-[2em] max-[1045px]:order-1 flex min-[1045px]:items-center justify-center bg-white max-[1045px]:mt-[-12em] max-[1045px]:pt-[3em] z-[9]">
        <div className="max-[1045px]:px-[2em] max-[500px]:w-full max-[1045px]:mx-auto">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Login</h2>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="min-[500px]:w-[27em]  w-full"
            >
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="Masukan Email"
                  errors={errors}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="Masukan Password"
                  errors={errors}
                />
              </div>

              <Link
                to="/auth/signup"
                className="text-primary font-medium block my-4 text-right"
              >
                Lupa Password ?
              </Link>

              <Button type="submit" bg="primary" size="full">
                Sign In
              </Button>

              <p className="text-center mt-6">
                Belum Memiliki Akun ?{' '}
                <Link
                  to={ROUTE.Auth.register}
                  className="text-primary font-medium"
                >
                  Daftar Disini
                </Link>
              </p>
            </form>
          </FormProvider>
        </div>
      </div>

      <Screen />
    </main>
  );
};

// <DevTool control={control} /> {/* set up the dev tool */}

export default SignIn;
