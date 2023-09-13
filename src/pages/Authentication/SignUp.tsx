// Third Party
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { DevTool } from '@hookform/devtools';

// Components
import Input from '../../components/forms_items/Input';
import Screen from '../../components/Auth/Screen';
import Button from '../../components/Button';
import InputSelect from '../../components/forms_items/InputSelect';

// Images
import background from '../../images/background_abstract.jpg';
import ROUTE from '../../route';

interface FormValue {
  email: string;
  password: string;
}

const SignIn = () => {
  const form = useForm<FormValue>();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  function handleOnSubmit(formValue: FormValue) {
    console.log(formValue);
  }

  return (
    <main className="max-[1045px]:grid-cols-1 grid grid-cols-2 top-0 left-0 w-full min-[1045px]:h-[100vh] bg-danger">
      <div className=" max-[1045px]:relative max-[1045px]:w-full max-[1045px]:rounded-tr-[2em] max-[1045px]:rounded-tl-[2em] max-[1045px]:order-1 flex justify-center bg-white max-[1045px]:mt-[-12em] pt-[3em]  z-[9] overflow-y-scroll overflow-x-hidden">
        <div className="max-[1045px]:px-[2em] max-[500px]:w-full max-[1045px]:mx-auto  ">
          <h2 className="text-[2em] mb-10 font-semibold text-black">Daftar</h2>

          <FormProvider {...form}>
            <form
              onSubmit={handleSubmit(handleOnSubmit)}
              className="min-[500px]:w-[27em]  w-full"
            >
              <div className="flex flex-col gap-4">
                <Input
                  name="fullname"
                  label="Nama Lengkap"
                  placeholder="......"
                  errors={errors}
                />
                <Input
                  name="from_school"
                  label="Asal Sekolah"
                  placeholder="......"
                  errors={errors}
                />
                <InputSelect
                  name="competency_1"
                  label="Pillihan Kompetensi 1"
                  placeholder="......"
                  options={[1, 2]}
                />
                <InputSelect
                  name="competency_2"
                  label="Pillihan Kompetensi 2"
                  placeholder="......"
                  options={[1, 2]}
                />
                <InputSelect
                  name="competency_3"
                  label="Pillihan Kompetensi 3"
                  placeholder="......"
                  options={[1, 2]}
                />
                <Input
                  name="phone"
                  label="No Telepon"
                  placeholder="......"
                  errors={errors}
                />
                <Input
                  name="email"
                  label="Email"
                  placeholder="......"
                  errors={errors}
                />
                <Input
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="......"
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
                Daftar Sekarang
              </Button>

              <p className="text-center mt-6 pb-16">
                Sudah Memiliki Akun ?{' '}
                <Link
                  to={ROUTE.Auth.login}
                  className="text-primary font-medium"
                >
                  Login
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
